let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/gi; // Change this line
let result = haRegex.test(haStr);

// To only specify the lower number of patterns, keep the first number followed by a comma.

// For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
// multipleA.test(A100); // Returns true