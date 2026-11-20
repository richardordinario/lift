import * as React from "react"
import { cn } from "cn"
import { Slot } from "radix-ui"

type CardProps = React.ComponentProps<"div"> & {
  /** Adds the lift-and-shadow hover treatment used on clickable cards. */
  hover?: boolean
  asChild?: boolean
}

function Card({ className, hover = false, asChild = false, ...props }: CardProps) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="card"
      className={cn("card", hover && "card-hover", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("card-foot", className)}
      {...props}
    />
  )
}

export { Card, CardFooter }
