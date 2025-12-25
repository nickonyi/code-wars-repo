function evil(n) {
  //given a decimal number convert into binary
  //convert the binary into a string
  const binary = n.toString(2);

  //define a count variable
  let binaryCount = 0;
  //loop through the array and check the number of ones
  for (let i = 0; i < binary.length; i++) {
    if (parseInt(binary[i]) === 1) {
      binaryCount++;
    }
  }
  //determine if it is odious or evil

  if (binaryCount % 2 === 0) {
    return "It's Evil!";
  }
  return "It's Odious!";
}

console.log(evil(3));

function pick(preferred, blacklisted, options) {
  const labels = ["A", "B", "C"];

  // 1. Remove blacklisted options
  const valid = options
    .map(([skill, percentage], index) => ({
      skill,
      percentage,
      index,
    }))
    .filter((option) => !blacklisted.has(option.skill));

  // 2. If nothing remains, take the money
  if (valid.length === 0) return "D";
  // 3. Look for preferred options
  const preferredOptions = valid.filter((option) =>
    preferred.has(option.skill)
  );
  if (preferredOptions.length > 0) {
    let best = preferredOptions[0];
    for (const option of preferredOptions) {
      if (option.percentage > best.percentage) {
        best = option;
      }
    }
    return labels[best.index];
  }

  // 4. No preferred → choose best neutral
  let bestNeutral = valid[0];
  for (const option of valid) {
    if (option.percentage > bestNeutral.percentage) {
      bestNeutral = option;
    }
  }
  return labels[bestNeutral.index];
}

console.log(
  pick(new Set(["attack", "defense"]), new Set(["luck"]), [
    ["luck", 25],
    ["speed", 20],
    ["defense", 15],
  ])
);

console.log(
  pick(new Set(["attack"]), new Set(["luck"]), [
    ["luck", 30],
    ["speed", 20],
    ["defense", 15],
  ])
);
