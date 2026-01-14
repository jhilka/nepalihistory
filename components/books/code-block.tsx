"use client";

import { useState } from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  references: Map<string, string>;
}

export function CodeBlock({ children, references }: CodeBlockProps) {
  const [showReferences, setShowReferences] = useState(false);

  return (
    <div className="my-4">
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        {children}
      </pre>
      {references.size > 0 && (
        <div className="mt-2">
          <button
            onClick={() => setShowReferences(!showReferences)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {showReferences ? "Hide" : "Show"} references ({references.size})
          </button>
          {showReferences && (
            <div className="mt-2 text-sm space-y-1">
              {Array.from(references.entries()).map(([key, value]) => (
                <div key={key} className="text-muted-foreground">
                  <span className="font-mono">{key}</span>: {value}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
