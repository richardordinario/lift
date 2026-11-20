import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva("", {
  variants: {
    variant: {
      /** Neutral grey pill. */
      tag: "tag",
      /** Grey pill with a green status dot. */
      "tag-dot": "tag tag-dot",
      /** Yellow pill flagging content that still needs approval. */
      notice: "notice",
      /** Dashed box for an unconfirmed fact. Never replace its text with a guess. */
      tbc: "tbc",
    },
  },
  defaultVariants: {
    variant: "tag",
  },
})

function Badge({
  className,
  variant = "tag",
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge }
