const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { onCreateNode } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    console.log(slug);
  }
}