import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brand } from "@/config/brand";
import documents from "./documents.json";
import { extractMetaLine, parseLegalContent } from "./parse-content";

export type LegalSlug = keyof typeof documents;

export type LegalDocument = {
  title: string;
  slug: string;
  paragraphs: string[];
};

export const legalDocuments = documents as Record<LegalSlug, LegalDocument>;

export const legalSlugs = Object.keys(legalDocuments) as LegalSlug[];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments[slug as LegalSlug];
}

export function createLegalMetadata(slug: LegalSlug): Metadata {
  const document = legalDocuments[slug];

  return {
    title: document.title,
    description: `${document.title} for ${brand.name}. ${brand.tagline}`,
  };
}

type LegalDocumentPageProps = {
  slug: LegalSlug;
};

function LegalBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li>
          <span className="text-muted">Legal</span>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li>
          <span className="font-medium text-foreground" aria-current="page">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}

function LegalContent({ slug }: { slug: LegalSlug }) {
  const document = legalDocuments[slug];
  const blocks = parseLegalContent(document.paragraphs, document.title);

  return (
    <div className="legal-prose">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2 key={`${slug}-h2-${index}`} id={`section-${index}`}>
                {block.text}
              </h2>
            );
          }

          return (
            <h3 key={`${slug}-h3-${index}`} id={`section-${index}`}>
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={`${slug}-list-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{linkifyText(item)}</li>
              ))}
            </ListTag>
          );
        }

        return <p key={`${slug}-p-${index}`}>{linkifyText(block.text)}</p>;
      })}
    </div>
  );
}

function linkifyText(text: string) {
  const parts = text.split(/(\S+@\S+\.\S+)/g);

  return parts.map((part, index) => {
    if (/^\S+@\S+\.\S+$/.test(part)) {
      return (
        <a key={`${part}-${index}`} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }

    return part;
  });
}

export function LegalDocumentPage({ slug }: LegalDocumentPageProps) {
  const document = legalDocuments[slug];
  const metaLine = extractMetaLine(document.paragraphs);

  return (
    <main className="bg-gradient-subtle">
      <div className="mx-auto w-full max-w-[850px] px-6 py-16 md:px-8 md:py-24">
        <LegalBreadcrumb title={document.title} />

        <header className="mb-12 border-b border-border/70 pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Legal Documentation
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {document.title}
          </h1>
          {metaLine && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {metaLine}
            </p>
          )}
        </header>

        <article className="rounded-2xl border border-border/60 bg-secondary/80 px-6 py-8 shadow-soft md:px-10 md:py-10">
          <LegalContent slug={slug} />
        </article>
      </div>
    </main>
  );
}
