import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes"

export default [
  route("/", "./routes/nav.tsx", [
    route("/main", "./routes/main.tsx", [
      route("/main/view", "./routes/view.tsx"),
    ]),
  ]),
] satisfies RouteConfig
