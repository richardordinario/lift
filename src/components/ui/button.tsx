import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/**
 * Variants map onto the LIFT `.btn` classes in src/styles/lift.css, which hold
 * the exact values from the design source.
 */
const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      ghost: "btn-ghost",
      green: "btn-green",
      light: "btn-light",
      "outline-light": "btn-outline-light",
    },
    block: {
      true: "btn-block",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    block: false,
  },
})

function Button({
  className,
  variant = "primary",
  block = false,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, block }), className)}
      {...props}
    />
  )
}

export { Button }
