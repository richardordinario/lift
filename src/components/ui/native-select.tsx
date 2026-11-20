import * as React from "react"
import { cn } from "cn"

/**
 * The design draws the chevron as a background image on the select itself, so
 * there is no wrapper element or icon here.
 */
function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="native-select"
      className={cn("input", className)}
      {...props}
    />
  )
}

function NativeSelectOption(props: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />
}

export { NativeSelect, NativeSelectOption }
