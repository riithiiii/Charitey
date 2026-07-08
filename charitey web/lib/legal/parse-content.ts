export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

function headingLevel(line: string): 2 | 3 | null {
  const match = line.match(/^(\d+(?:\.\d+)*)\s+/);
  if (!match) return null;

  const parts = match[1].split(".");
  if (parts.length >= 3) return 3;
  if (parts.length === 2) return 2;
  if (parts.length === 1 && line.length < 80 && !line.endsWith(".")) return 2;

  return null;
}

function isMetaLine(line: string) {
  return /Effective Date:/i.test(line) || /Last Updated:/i.test(line);
}

function isListIntro(line: string) {
  return /[:：]\s*$/.test(line.trim());
}

function looksLikeListItem(line: string) {
  const trimmed = line.trim();
  return (
    trimmed.length > 0 &&
    trimmed.length <= 220 &&
    /^[A-Z'"(]/.test(trimmed) &&
    (trimmed.endsWith(".") || trimmed.endsWith(";"))
  );
}

function flattenParagraphs(paragraphs: string[]) {
  return paragraphs
    .flatMap((paragraph) => paragraph.split("\n"))
    .map((line) => line.trim())
    .filter(Boolean);
}

export function parseLegalContent(
  paragraphs: string[],
  documentTitle?: string
): ContentBlock[] {
  const lines = flattenParagraphs(paragraphs).filter((line) => !isMetaLine(line));
  const blocks: ContentBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const level = headingLevel(line);

    if (level) {
      const normalized = line.replace(/^\d+(?:\.\d+)*\s+/, "").trim();
      if (
        documentTitle &&
        normalized.toLowerCase() === documentTitle.toLowerCase()
      ) {
        index += 1;
        continue;
      }

      blocks.push({ type: "heading", level, text: line });
      index += 1;
      continue;
    }

    if (isListIntro(line)) {
      const intro = line;
      const items: string[] = [];
      let cursor = index + 1;

      while (cursor < lines.length) {
        const candidate = lines[cursor];
        if (headingLevel(candidate) || isListIntro(candidate)) break;
        if (!looksLikeListItem(candidate)) break;
        items.push(candidate);
        cursor += 1;
      }

      if (items.length >= 2) {
        blocks.push({ type: "paragraph", text: intro });
        blocks.push({ type: "list", ordered: false, items });
        index = cursor;
        continue;
      }
    }

    const grouped: string[] = [line];
    let cursor = index + 1;

    while (cursor < lines.length) {
      const next = lines[cursor];
      if (headingLevel(next) || isListIntro(next) || looksLikeListItem(next)) {
        break;
      }
      grouped.push(next);
      cursor += 1;
    }

    blocks.push({ type: "paragraph", text: grouped.join(" ") });
    index = cursor;
  }

  return blocks;
}

export function extractMetaLine(paragraphs: string[]) {
  const flat = flattenParagraphs(paragraphs);
  return flat.find(isMetaLine);
}
