import type {
  ComponentResolveResult,
  ComponentResolver,
} from "unplugin-vue-components"

export interface TiroResolverOptions {
  /**
   * import style along with components
   *
   * @default "sass"
   */
  importStyle?: boolean | "css" | "sass"
}

export function getResolved(
  name: string,
  options: TiroResolverOptions
): ComponentResolveResult {
  const { importStyle = "sass" } = options
  const sideEffects = []

  if (importStyle === "sass") {
    sideEffects.push("@tiro/ui/style/base.scss")
  } else if (importStyle === true || importStyle === "css") {
    sideEffects.push("@tiro/ui/style/base.css")
  }

  return {
    path: `@tiro/ui/src/${name.toLowerCase()}`,
    importName: `${name}Component`,
    sideEffects,
  }
}

export function TiroUIResolver(
  options: TiroResolverOptions = {}
): ComponentResolver[] {
  return [
    {
      type: "component",
      resolve: (name: string) => {
        if (name.slice(0,2) == "Ti") return getResolved(name.slice(2), options)
      },
    },
  ]
}
