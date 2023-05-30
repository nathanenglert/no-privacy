import { parseISO, format } from "date-fns";

export interface DateTimeProps {
  value: string;
  className?: string;
}

const isNumeric = (val: string): boolean => {
  return !isNaN(Number(val));
};

export function DateTime({ value, className }: DateTimeProps) {
  const date = isNumeric(value) ? new Date(value) : parseISO(value);

  return (
    <time dateTime={value} className={className}>
      {format(date, "MMM do 'at' h:mm aa")}
    </time>
  );
}
