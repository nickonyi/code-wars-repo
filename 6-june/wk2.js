function stockList(books, categories) {
  let total = categories.reduce((acc, cat) => {
    acc[cat] = 0;
    return acc;
  }, {});

  let result = '';

  books.forEach((book) => {
    const [code, qty] = book.split(' ');
    const letter = code[0];
    const amount = Number(qty);

    total[letter] = (total[letter] || 0) + amount;
  });

  for (const letter in total) {
    result += `(${letter}:${total[letter]}) -`;
  }

  result = result.slice(0, -1);
  return result;
}

console.log(
  stockList(
    ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
    ['A', 'B', 'C', 'D']
  )
);
