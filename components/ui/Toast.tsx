import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState, useRef } from "react";
import * as RadixToast from "@radix-ui/react-toast";

const toastStyles = cva("rounded shadow-sm pl-4 pr-4 pt-2 pb-3 items-center", {
  variants: {
    intent: {
      success: "bg-green-600 text-green-200",
      danger: "bg-red-600 text-red-200",
    },
  },
  defaultVariants: {
    intent: "success",
  },
});
export interface ToastProps extends VariantProps<typeof toastStyles> {
  title: string;
  description: string;
  trigger: number;
}

export function Toast({ title, description, intent, trigger }: ToastProps) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (trigger) {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
      }, 100);
    }
  }, [trigger]);

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        className={`ToastRoot ${toastStyles({ intent })}`}
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title className="mb-1 font-medium text-lg">{title}</RadixToast.Title>
        <RadixToast.Description className="m-0">{description}</RadixToast.Description>
        {/* <RadixToast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button className="Button small green">Undo</button>
        </RadixToast.Action> */}
      </RadixToast.Root>
      <RadixToast.Viewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-3 max-w-full m-0 list-none z-50 outline-none" />
    </RadixToast.Provider>
  );
}
