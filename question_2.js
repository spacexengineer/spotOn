function decodeString(s) {
  // stack multiplied sets of strings to be combined later
  let stack = [];
  let nums = "0123456789";
  for (let i of s) {
    if (i !== "]") {
      stack.push(i);
    } else {
      // build up string between braces
      let tmp = "";
      while (stack[stack.length - 1] !== "[") {
        tmp = stack.pop() + tmp;
      }

      // remove opening brace
      stack.pop();

      // find number to multiply string section
      let multiplier = "";
      while (stack.length > 0 && nums.includes(stack[stack.length - 1])) {
        multiplier = stack.pop() + multiplier;
      }
      multiplier = parseInt(multiplier);

      // multiply string and push onto stack strings
      stack.push(tmp.repeat(multiplier));
    }
  }

  // combine multiplied strings into final result string
  let result = "";
  while (stack.length > 0) {
    result = stack.pop() + result;
  }
  return result;
}
