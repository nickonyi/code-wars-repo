function stockList(books, categories) {
  if (!books.length) return '';
  const total = {};

  books.forEach((book) => {
    let cat = book[0];
    total[cat] = (total[cat] || 0) + +book.split(' ')[1];
  });

  return categories
    .map((cat) => {
      return `(${cat} : ${total[cat] || 0})`;
    })
    .join('-');
}

console.log(
  stockList(
    ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
    ['A', 'B', 'C', 'D']
  )
);

console.log(
  stockList(
    ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
    ['A', 'B']
  )
);

console.log(stockList([], ['A', 'B']));
