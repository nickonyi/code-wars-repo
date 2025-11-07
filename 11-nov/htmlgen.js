class HTMLGen {
  a(str) {
    return `<a>${str}</a>`;
  }
  b(str) {
    return `<b>${str}</b>`;
  }
  p(str) {
    return `<p>${str}</p>`;
  }
  body(str) {
    return `<body>${str}</body>`;
  }
  div(str) {
    return `<div>${str}</div>`;
  }
  span(str) {
    return `<span>${str}</span>`;
  }
  title(str) {
    return `<title>${str}</title>`;
  }
  comment(str) {
    return `<!--${str}-->`;
  }
}

var g = new HTMLGen();
var paragraph = g.p("Hello, World!");
var block = g.div(paragraph);
console.log(paragraph);
console.log(block);
