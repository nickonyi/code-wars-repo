function mix(s1, s2) {
    // your code
    //convert the strings to lowercase letter and only have letters in every string
    let string1 =s1.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let string2 =s2.toLowerCase().replace(/[^a-zA-Z]/g, '');

    console.log([string1,string2]);
    
  }

  mix("my&friend&Paul has heavy hats! &","my friend John has many many friends &")