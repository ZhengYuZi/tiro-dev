const container = require("markdown-it-container")

function createContainer(klass) {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        let content = ''
        if (token.nesting === 1) {
          let target = idx + 1
          while (tokens[target].nesting === 0) {
            if(tokens[target].type === 'html_block'){
              content += `${tokens[target].content}\n`
              tokens[target].content = ''
            }
            target++
          }
          return `<ti-example>\n<template v-slot:component>\n${content}</template>\n`
        }else{
          return "</ti-example>"
        }
      }
    }
  ]
}

module.exports = {
    createContainer
}