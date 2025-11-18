import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import { Label } from "../../components/ui/label";

/**
 * Simple Form provider without react-hook-form
 */
const Form = ({ children, onSubmit, className, ...props }: React.HTMLAttributes<HTMLFormElement> & { onSubmit?: (values: any) => void }) => {
  const [values, setValues] = React.useState<Record<string, any>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const setFieldValue = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const getFieldValue = (name: string) => values[name];

  return (
    <FormContext.Provider value={{ values, setFieldValue, getFieldValue, errors, setErrors }}>
      <form
        className={cn("space-y-4", className)}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(values);
        }}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

type FormContextValue = {
  values: Record<string, any>;
  setFieldValue: (name: string, value: any) => void;
  getFieldValue: (name: string) => any;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
};

const FormContext = React.createContext<FormContextValue | null>(null);

type FormFieldProps = {
  name: string;
  children: React.ReactNode;
};

const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  return <FormFieldContext.Provider value={{ name }}>{children}</FormFieldContext.Provider>;
};

const FormFieldContext = React.createContext<{ name: string }>({ name: "" });

/**
 * FormItem component
 */
const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormItemContext = React.createContext<{ id: string }>({ id: "" });

/**
 * FormLabel
 */
const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
  ({ className, ...props }, ref) => {
    const field = React.useContext(FormFieldContext);
    const item = React.useContext(FormItemContext);

    const form = React.useContext(FormContext);
    const error = form?.errors[field.name];

    return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={item.id} {...props} />;
  }
);
FormLabel.displayName = "FormLabel";

/**
 * FormControl
 */
const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(({ children, ...props }, ref) => {
  const field = React.useContext(FormFieldContext);
  const item = React.useContext(FormItemContext);
  const form = React.useContext(FormContext);

  if (!form) throw new Error("FormControl must be used inside a Form");

  const child = React.Children.only(children) as React.ReactElement<any>;

  return React.cloneElement(child, {
    ref,
    id: item.id,
    value: form.getFieldValue(field.name) ?? "",
    onChange: (e: any) => form.setFieldValue(field.name, e.target.value),
    ...props,
  });
});
FormControl.displayName = "FormControl";

/**
 * FormDescription
 */
const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => {
  const item = React.useContext(FormItemContext);
  return <p ref={ref} id={`${item.id}-description`} className={cn("text-sm text-muted-foreground", className)} {...props} />;
});
FormDescription.displayName = "FormDescription";

/**
 * FormMessage
 */
const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...props }, ref) => {
  const field = React.useContext(FormFieldContext);
  const form = React.useContext(FormContext);

  const error = form?.errors[field.name];

  if (!error && !children) return null;

  return (
    <p ref={ref} className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {error || children}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage };
