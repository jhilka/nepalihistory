import type { ReactNode } from "react";

interface ErrorLayoutProps {
  code: string;
  title: string;
  description: string;
  action: ReactNode;
}

export function ErrorLayout({ code, title, description, action }: ErrorLayoutProps) {
  return (
    <div className="h-[calc(100vh-3.5rem)] flex items-center justify-center px-4">
      <div className="text-center space-y-4 sm:space-y-6 max-w-md">
        <h1 className="text-6xl sm:text-8xl font-bold font-germania text-foreground/60">
          {code}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold font-oswald">{title}</h2>
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        {action}
      </div>
    </div>
  );
}
