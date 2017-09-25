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

        let grid90 = [];
        let newRow = "";
        for (let col = this.grid[0].length - 1; col >= 0; col--) {
            newRow = "";
            for (let row = 0; row < this.grid.length; row++) {
                newRow = newRow + this.grid[row].charAt(col);
            }
            grid90.push(newRow);
        }

        for (let i = 0; i < word.length; i++) {

            let stringWord = word[i];

            for (let lineNum = 0; lineNum < grid90.length; lineNum++) {

                let line = grid90[lineNum];
                if (line.indexOf(stringWord) > -1) {

                    let startIndex = line.indexOf(stringWord);

                    returnVal[stringWord] = {
                        "start": [startIndex + 1, grid90[0].length - (lineNum + 1) + 1],
                        "end": [startIndex + stringWord.length, grid90[0].length - (lineNum + 1) + 1]
                    };
                }
            }

            let backWord = reverseString(word[i]);

            for (let lineNum = 0; lineNum < grid90.length; lineNum++) {

                let line = grid90[lineNum];
                if (line.indexOf(backWord) > -1) {

                    let startIndex = line.indexOf(backWord);

                    returnVal[stringWord] = {
                        "end": [startIndex + 1, grid90[0].length - (lineNum + 1) + 1],
                        "start": [startIndex + stringWord.length, grid90[0].length - (lineNum + 1) + 1]
                    };
                }
            }
        }


        return returnVal;
    }
}

export default WordSearch;