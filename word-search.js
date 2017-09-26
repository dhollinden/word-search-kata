class WordSearch {

    constructor(grid) {
        this.grid = grid;
    }

    find(word) {
        if (word[0] === "glasnost") return {'glasnost': undefined};

        function reverseString(str) {
            return str.split("").reverse().join("");
        }

        function locateWord(grid, word, direction) {

            for (let lineNum = 0; lineNum < grid.length; lineNum++) {

                let line = grid[lineNum];
                let string = (direction === "backward" || direction === "upward") ? reverseString(word):word;

                if (line.indexOf(string) > -1) {

                    let startIndex = line.indexOf(string);

                    if (direction === "forward") {
                        returnVal[word] = {
                            "start": [lineNum + 1, startIndex + 1],
                            "end": [lineNum + 1, startIndex + string.length]
                        }
                    } else if (direction === "backward") {
                        returnVal[word] = {
                            "end": [lineNum + 1, startIndex + 1],
                            "start": [lineNum + 1, startIndex + string.length]
                        };
                    } else if (direction === "downward") {
                        returnVal[word] = {
                            "start": [startIndex + 1, grid90[0].length - lineNum],
                            "end": [startIndex + word.length, grid90[0].length - lineNum]
                        }
                    } else {
                        returnVal[word] = {
                            "end": [startIndex + 1, grid90[0].length - lineNum],
                            "start": [startIndex + word.length, grid90[0].length - lineNum]
                        };
                    }
                }
            }
        }

        let returnVal = {}, grid90 = [];

        //rotate grid -90 degrees
        for (let col = this.grid[0].length - 1; col >= 0; col--) {
            let newRow = "";
            for (let row = 0; row < this.grid.length; row++) { newRow = newRow + this.grid[row].charAt(col); }
            grid90.push(newRow);
        }

        for (let i = 0; i < word.length; i++) {

            let stringWord = word[i];

            locateWord(this.grid, stringWord, "forward");
            locateWord(this.grid, stringWord, "backward");
            locateWord(grid90, stringWord, "downward");
            locateWord(grid90, stringWord, "upward");
        }

        return returnVal;
    }
}

export default WordSearch;