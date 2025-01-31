function mix(s1, s2) {
    // your code
    //convert the strings to lowercase letter and only have letters in every string
    let string1 =s1.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let string2 =s2.toLowerCase().replace(/[^a-zA-Z]/g, '');
    //count the frequency of every letter

    let frequency1 = [...string1].reduce((frequency,char)=> {
        frequency[char]=(frequency[char] || 0)+1
        return frequency;
    },{});

    let frequency2 = [...string2].reduce((frequency,char)=> {
        frequency[char]=(frequency[char] || 0)+1
        return frequency;
    },{});

    //remove items that don't appear more that two times
    frequency1 = Object.fromEntries(Object.entries(frequency1).filter(([char,count]) => count >=2));
    frequency2 = Object.fromEntries(Object.entries(frequency2).filter(([char,count]) => count >=2));
    return [frequency1,frequency2];
    
  }

 console.log
 ( mix("my&friend&Paul has heavy hats! &","my friend John has many many friends &"))