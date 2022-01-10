import container from "markdown-it-container"

const containerPlugin = (klass = "show") => {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        let content = ""
        if (token.nesting === 1) {
          let target = idx + 1
          while (tokens[target].nesting === 0) {
            if (tokens[target].type === "html_block") {
              content += `${tokens[target].content}\n`
              tokens[target].content = ""
            }
            target++
          }
          return `<ti-example>\n<template v-slot:component>\n${content}</template>\n`
        } else {
          return "</ti-example>"
        }
      },
    },
  ]
}

// const headingPlugin = (md, include = ["h2", "h3"]) => {
//   md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
//     const token = tokens[i]
//     if (include.includes(token.tag)) {
//       const title = tokens[i + 1].content
//       headers.push({
//         level: parseInt(token.tag.slice(1), 10),
//         title: title
//       })
//     }
//     return self.renderToken(tokens, i, options)
//   }
// }

export { containerPlugin }
