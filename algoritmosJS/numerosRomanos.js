const convertToRoman = (num) => {
    const map = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
      };

      let romanized = '';
      const decimalKeys = Object.keys(map).reverse();

      decimalKeys.forEach(key => {
        while(key <= num) {
            romanized += map[key];
            num -= key;
        }
      });

    return romanized;
}

console.log(convertToRoman(5))
