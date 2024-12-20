import {
  Outlet,
  redirect,
  type ShouldRevalidateFunctionArgs,
} from "react-router"
import type { Route } from "./+types/main"
import { disableIntentsRevalidations } from "~/utils"

let count = 0
export const clientLoader = () => {
  count = count + 1
  return {
    count,
  }
}

export default function Main(props: Route.ComponentProps) {
  const { loaderData } = props
  return (
    <div>
      <p>/main loader revalidations: {loaderData.count}</p>

      <Outlet />
    </div>
  )
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
