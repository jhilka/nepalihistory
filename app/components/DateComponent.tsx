import { formatDateDisplay } from "@/lib/date-utils";
import { cn } from "@/lib/utils";

const DateComponent = ({
  date,
  className,
}: {
  date: string | number;
  className?: string;
}) => {
  const { year, month, day } = formatDateDisplay(date);
  return (
    <time
      className={cn(
        "block font-mono text-xs sm:text-sm text-center sm:text-left font-bold tabular-nums tracking-wide",
        className
      )}
    >
      {day && `${day}.`}
      {month && `${month}.`}
      {year}
    </time>
  );
};

export default DateComponent;
