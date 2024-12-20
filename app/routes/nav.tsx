import { Outlet, useFetcher, useNavigation } from "react-router"
import type { Route } from "./+types/nav"

export const clientLoader = () => {
  console.log("nav client loader")
  const cookies = new URLSearchParams(document.cookie)

  const theme = cookies.get("theme") ?? "light"

  return { theme }
}

export const clientAction = () => {
  const cookies = new URLSearchParams(document.cookie)

  const theme = cookies.get("theme") ?? "light"
  let newTheme = theme === "light" ? "dark" : "light"

  document.cookie = `theme=${newTheme}; Path=/; Max-Age=365000`

  return {
    theme: newTheme,
  }
}

export default function Nav(props: Route.ComponentProps) {
  const fetcher = useFetcher()
  const navigation = useNavigation()

  const isLoading = navigation.state !== "idle"

  return (
    <div>
      theme: {props.loaderData.theme}
      <fetcher.Form action="/" method="POST">
        <button
          name="intent"
          value="toggle-theme"
          disabled={isLoading}
          className="p-2 border border-white rounded-lg"
        >
          {!isLoading ? "toggle theme" : "updating theme..."}
        </button>
      </fetcher.Form>
      <Outlet />
    </div>
  )
}
