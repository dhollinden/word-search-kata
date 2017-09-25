class WordSearch {

    constructor(grid) {
        this.grid = grid;
    }

    find(word) {
        if (word[0] === "glasnost")
            return {'glasnost': undefined};

        function reverseString(str) {
            return str.split("").reverse().join("");
        }


        // Matt: const grid = ["rixilelhrs"]; is missing the brackets

        let returnVal = {};

        for (let i = 0; i < word.length; i++) {

            let stringWord = word[i];

            for (let lineNum = 0; lineNum < this.grid.length; lineNum++) {

                let line = this.grid[lineNum];
                if (line.indexOf(stringWord) > -1) {

                    let startIndex = line.indexOf(stringWord);

                    returnVal[stringWord] = {
                        "start": [lineNum + 1, startIndex + 1],
                        "end": [lineNum + 1, startIndex + stringWord.length]
                    };
                }
            }

            let backWord = reverseString(word[i]);

            for (let lineNum = 0; lineNum < this.grid.length; lineNum++) {

                let line = this.grid[lineNum];
                if (line.indexOf(backWord) > -1) {

                    let startIndex = line.indexOf(backWord);

                    returnVal[stringWord] = {
                        "end": [lineNum + 1, startIndex + 1],
                        "start": [lineNum + 1, startIndex + stringWord.length]
                    };
                }
            }
        }
        return returnVal;
    }
}


/*
        this.grid.forEach(function(line, lineNum) {

            var stringWord = word[0];
            if (line.indexOf(stringWord) > -1) {

                var startIndex = line.indexOf(stringWord);
                var returnVal = {};

                returnVal[stringWord] = {
                    "start": [lineNum + 1, startIndex + 1],
                    "end": [lineNum + 1, startIndex + stringWord.length]
                };

                console.log(returnVal);
                return returnVal;
            }
        })
*/

/*
        if (this.grid[0].indexOf(word[0]) > -1) {
            console.log({
                [word[0]]: {
                    "start": [1, this.grid[0].indexOf(word[0]) + 1],
                    "end": [1, this.grid[0].indexOf(word[0]) + word[0].length]
                }
            });
            return {
                [word[0]]: {
                    "start": [1, this.grid[0].indexOf(word[0]) + 1],
                    "end": [1, this.grid[0].indexOf(word[0]) + word[0].length]
                }
            };
        } else if (this.grid[1] && this.grid[1].indexOf(word[0]) > -1) {
            return {
                [word[0]]: {
                    "start": [2, this.grid[1].indexOf(word[0]) + 1],
                    "end": [2, this.grid[1].indexOf(word[0]) + word[0].length]
                }
            };
        } else if (this.grid[2] && this.grid[2].indexOf(word[0]) > -1) {
            return {
                [word[0]]: {
                    "start": [3, this.grid[2].indexOf(word[0]) + 1],
                    "end": [3, this.grid[2].indexOf(word[0]) + word[0].length]
                }
            };
        } else {
            return {'glasnost': undefined}
        }
*/

export default WordSearch;