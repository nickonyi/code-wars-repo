//implement a function that would take the morse code as input
//and decode and return a human readable instrunctions
//single characters are separeted by a single space three words create a word

const decodeMorse = (morseCode) => {
  //remove opening and closing spaces if they exist
  morseCode = morseCode.trim();
  //create a morse code dictionary
  const MORSE_CODE = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",

    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",

    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    SOS: "...---...",
  };

  //reverse the morsecode dictionary
  const morseToChar = Object.fromEntries(
    Object.entries(MORSE_CODE).map(([k, v]) => [v, k])
  );

  //break them first into morse words
  const morseWords = morseCode.split("   ");

  //for each morse words break them into morse characters
  //loop through my array and convert the morsecode into human raeadable characters
  const text = morseWords
    .map((word) =>
      word
        .split(" ")
        .map((sym) => morseToChar[sym])
        .join("")
    )
    .join(" ");
  //return the text
  return text;
};

console.log(decodeMorse("   .... . -.--   "));
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(decodeMorse("...---..."));
