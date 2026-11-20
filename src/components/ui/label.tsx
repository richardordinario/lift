import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

/** Typography comes from `.field label` in src/styles/lift.css. */
function Label(props: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return <LabelPrimitive.Root data-slot="label" {...props} />
}

export { Label }
