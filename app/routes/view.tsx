import type { ShouldRevalidateFunctionArgs } from "react-router"
import { disableIntentsRevalidations } from "~/utils"
import type { Route } from "./+types/view"

let count = 0
export const clientLoader = () => {
  count = count + 1
  return { count }
}

export default function View(props: Route.ComponentProps) {
  const { loaderData } = props

  return <div>/main/view loader revalidations: {loaderData.count}</div>
}

export const shouldRevalidate = ({
  formData,
}: ShouldRevalidateFunctionArgs) => {
  if (formData) {
    return disableIntentsRevalidations({
      formData,
      disabledIntents: ["toggle-theme"],
    })
  }

  return true
}
