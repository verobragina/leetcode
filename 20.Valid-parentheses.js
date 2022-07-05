const isValid = function (s) {
  const mapping = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (mapping[char]) {
      stack.push(char)
    } else {
      if (stack.length === 0) {
        return false
      }

      if (char !== mapping[stack.pop()]) {
        return false
      }
    }
  }

  return stack.length === 0
};

isValid('(){}[]') // true
