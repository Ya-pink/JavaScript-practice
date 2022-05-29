function calculateWordsInString(string) {
    // Write code here

    let count = 1;
    for (let index = 0; index < string.length; index++) {
        const char = string[index];
        const previousChar = string[index - 1];

        if (char === ' ' && previousChar !== ' ') {
            count++;
        }
    }

    console.log(count);
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");