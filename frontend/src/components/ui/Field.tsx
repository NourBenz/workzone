// Field.tsx (merged Input + Textarea)
import * as React from "react"

import { cn } from "../../lib/utils"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  as?: "input"
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea"
}

type FieldProps = InputProps | TextareaProps

export const Field = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FieldProps
>(({ as = "input", className, ...props }, ref) => {
  const base = cn(
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    as === "input" ? "h-10" : "min-h-[80px]",
    className
  )

  return as === "textarea" ? (
    <textarea
      ref={ref as React.Ref<HTMLTextAreaElement>}
      className={base}
      {...(props as TextareaProps)}
    />
  ) : (
    <input
      ref={ref as React.Ref<HTMLInputElement>}
      className={base}
      {...(props as InputProps)}
    />
  )
})

Field.displayName = "Field"
