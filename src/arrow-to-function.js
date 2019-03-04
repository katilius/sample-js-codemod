module.exports = function transform(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ArrowFunctionExpression)
    .replaceWith(
      p => {
        const nodeValue = p.value;
        return j.functionDeclaration(j.identifier(''), nodeValue.params,
            j.blockStatement([j.returnStatement(nodeValue.body)])
            );
      }
    )
    .toSource();
};