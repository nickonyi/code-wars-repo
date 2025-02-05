let company = {
  // the same object, compressed for brevity
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: {
      siteA: [
        { name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 },
      ],
      siteB: [
        { name: 'Joy', salary: 4000 },
        { name: 'Max', salary: 3800 },
      ],
    },
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

const sumSalaries = (depatment) => {
  if (Array.isArray(depatment)) {
    return depatment.reduce((acc, num) => acc + num.salary, 0);
  } else {
    let sum = 0;

    for (let subdep of Object.values(depatment)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
};

console.log(sumSalaries(company));

const development = {
  sites: {
    siteA: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    siteB: [
      { name: 'Joy', salary: 4000 },
      { name: 'Max', salary: 3800 },
    ],
  },
  internals: [{ name: 'Jack', salary: 1300 }],
};

console.log(Object.values(development));
