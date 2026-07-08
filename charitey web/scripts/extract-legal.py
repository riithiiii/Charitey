import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

MAPPING = {
    "charitey-privacy-policy.docx": ("privacy-policy", "Privacy Policy"),
    "charitey-terms-and-conditions.docx": ("terms-and-conditions", "Terms & Conditions"),
    "charitey-community-guidelines.docx": ("community-guidelines", "Community Guidelines"),
    "charitey-cookie-policy.docx": ("cookie-policy", "Cookie Policy"),
    "charitey-disclaimer.docx": ("disclaimer", "Disclaimer"),
    "charitey-accessibility-statement.docx": ("accessibility", "Accessibility Statement"),
    "charitey-data-deletion-policy.docx": ("data-deletion-policy", "Data Deletion Policy"),
    "charitey-acceptable-use-policy.docx": ("acceptable-use-policy", "Acceptable Use Policy"),
    "charitey-copyright-policy.docx": ("copyright-policy", "Copyright Policy"),
}


def extract_docx(path: Path) -> str:
    with zipfile.ZipFile(path) as archive:
        xml = archive.read("word/document.xml").decode("utf-8")
    text = re.sub(r"</w:p>", "\n", xml)
    text = re.sub(r"<[^>]+>", "", text)
    replacements = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&apos;": "'",
    }
    for entity, char in replacements.items():
        text = text.replace(entity, char)
    text = re.sub(r"[^\S\n]+", " ", text)
    return re.sub(r"\n\s*\n+", "\n\n", text).strip()


def main() -> None:
    docs_dir = ROOT / "public" / "documents"
    output_dir = ROOT / "lib" / "legal"
    output_dir.mkdir(parents=True, exist_ok=True)

    documents: dict[str, dict] = {}
    for filename, (slug, title) in MAPPING.items():
        path = docs_dir / filename
        content = extract_docx(path)
        paragraphs = [paragraph.strip() for paragraph in content.split("\n\n") if paragraph.strip()]
        documents[slug] = {
            "title": title,
            "slug": slug,
            "paragraphs": paragraphs,
        }

    output_path = output_dir / "documents.json"
    output_path.write_text(json.dumps(documents, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(documents)} documents to {output_path}")


if __name__ == "__main__":
    main()
