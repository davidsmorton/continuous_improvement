let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/ig; // Change this line
let result = timRegex.test(timStr);

// For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4); // Returns false
// multipleHA.test(A3); // Returns true
// multipleHA.test(A100); // Returns false