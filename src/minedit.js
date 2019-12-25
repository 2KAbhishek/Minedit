const loader = require('monaco-loader')

loader().then((monaco) => {
  const container = document.getElementById('container')

  editor = monaco.editor.create(container, {

    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: 'true'

  })
})
