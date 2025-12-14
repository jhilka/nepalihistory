interface EntityTagsProps {
  tags: string[];
}

export function EntityTags({ tags }: EntityTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 pt-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] px-2 py-0.5 bg-muted-foreground/10 text-muted-foreground shadow-2xs rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
