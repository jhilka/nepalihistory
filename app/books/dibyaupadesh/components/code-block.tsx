"use client";

import React from "react";
import { AbbrWithTooltip } from "./abbr-with-tooltip";
import { ReactNode } from "react";

interface CodeBlockProps {
  children?: ReactNode;
  references?: Map<string, string>;
}

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (typeof node === "object" && "props" in node) {
    return extractText((node as any).props.children);
  }

  return "";
}

export function CodeBlock({ children, references }: CodeBlockProps) {
  const code = extractText(children);
  const parts = code.split(
    /(<sup>.*?<\/sup>|<abbr\s+title="[^"]*">.*?<\/abbr>)/g
  );

  return (
    <pre className="bg-muted-foreground/10 rounded-lg p-4 overflow-x-auto my-4">
      <code className="italic text-base sm:text-lg leading-snug whitespace-pre-wrap wrap-break-words tracking-tight tracking-tighter">
        {parts.map((part, index) => {
          const abbrMatch = part.match(
            /<abbr\s+title="([^"]*)">([^<]*)<\/abbr>/
          );

          if (abbrMatch) {
            const tooltipText = abbrMatch[1];
            const displayText = abbrMatch[2];
            return (
              <AbbrWithTooltip key={index} title={tooltipText}>
                {displayText}
              </AbbrWithTooltip>
            );
          }

          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </code>
    </pre>
  );
}
