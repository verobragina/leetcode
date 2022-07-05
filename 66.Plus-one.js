const plusOne = function (digits, i = digits.length - 1) {
  if (digits[i] + 1 === 10) {
    digits[i] = 0;
    if (i - 1 < 0) {
      return plusOne([0, ...digits], 0)
    }
    return plusOne(digits, i - 1);
  }

  digits[i] = digits[i] + 1;
  return digits;
};

plusOne([1, 2, 3]) // [1, 2, 4]
plusOne([9]) // [1, 0]

// Array.unshift(i) - добавляет элемент в начало массива и возвращает новую длину
