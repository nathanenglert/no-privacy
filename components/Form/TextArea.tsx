interface InputData {
  name: string;
  label: string;
  columns: number;
  rows: number;
  placeholder: string | null;
  defaultValue: string | null;
}

export default function TextArea({
  name,
  label,
  columns,
  rows,
  placeholder,
  defaultValue,
}: InputData) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <textarea
          name={name}
          className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
          placeholder={placeholder ?? ""}
          defaultValue={defaultValue ?? ""}
          cols={columns}
          rows={rows}
        />
      </div>
    </div>
  );
}
