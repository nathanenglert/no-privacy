interface InputData {
  name: string;
  label: string;
  placeholder: string | null;
  defaultValue: string | null;
}

export default function Input({ name, label, placeholder, defaultValue }: InputData) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          name={name}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder ?? ""}
          defaultValue={defaultValue ?? ""}
        />
      </div>
    </div>
  );
}
