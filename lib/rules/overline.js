/**
 * @fileoverview count the file line
 * @author overline
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "count the file line",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function (context) {
    const sourceCode = context.getSourceCode();

    // console.log(context)

    // console.log(sourceCode)

    const len1 = sourceCode.lines.length
    const len2 = sourceCode.getAllComments().length



    return {
      'Program': function (node) {
        const maxLine = 300
        const isOver = len1 - len2
        if (isOver > maxLine) {
          context.report({
            node: node,
            message: `最多为${maxLine}行，当前已有${isOver}行`
          });
        }
      }
    }
  }
};
