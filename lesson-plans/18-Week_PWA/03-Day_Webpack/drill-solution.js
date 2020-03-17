'use strict';

function validParentheses(parens){
  let stack = [];
  for(const paren of parens) {
    stack.push(paren);
    
    while (isMatching(stack[stack.length - 2], stack[stack.length - 1])) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}

function isMatching(parenOne, parenTwo) {
  return parenOne === '(' && parenTwo === ')';
}

validParentheses('()()(()())');