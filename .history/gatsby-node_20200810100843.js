module.exports.onCreateNode = ({ node, actions }) => {
  const { onCreateNode } = actions
  if (node.internal.type === 'MarkdownRemark') {
    console.log(node);
  }
}