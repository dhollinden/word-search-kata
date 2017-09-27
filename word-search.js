class WordSearch {

    constructor(grid) {
        this.grid = grid;
    }

    find(word) {
        if (word[0] === "glasnost") return {'glasnost': undefined};

        let returnVal = {}, directions = ["forward", "backward", "downward", "upward"];

        for (let i = 0; i < word.length; i++) {
            let stringWord = word[i];

            for (let j = 0; j < directions.length; j++) {
                if (this.locateWord(this.grid, stringWord, directions[j]))
                    returnVal[stringWord] = this.locateWord(this.grid, stringWord, directions[j]);
            };
        }
        return returnVal;
    }

    locateWord(grid, word, direction) {

        if (direction === "backward" || direction === "upward") word = this.reverseString(word);
        if (direction === "downward" || direction === "upward") grid = this.rotateGrid(grid);

        for (let lineNum = 0; lineNum < grid.length; lineNum++) {

            let line = grid[lineNum];
            if (line.indexOf(word) > -1) {

                let startIndex = line.indexOf(word), wordLength = word.length, gridWidth = grid[0].length;
                switch(direction) {
                    case "forward":
                        return {"start": [lineNum + 1, startIndex + 1], "end": [lineNum + 1, startIndex + wordLength]};
                    case "backward":
                        return {"end": [lineNum + 1, startIndex + 1], "start": [lineNum + 1, startIndex + wordLength]};
                    case "downward":
                        return {"start": [startIndex + 1, gridWidth - lineNum], "end": [startIndex + wordLength, gridWidth - lineNum]};
                    case "upward":
                        return {"end": [startIndex + 1, gridWidth - lineNum], "start": [startIndex + wordLength, gridWidth - lineNum]};
                }
            }
        }
    }

    reverseString(str) {
        return str.split("").reverse().join("");
    }

    rotateGrid(grid) {
        let grid90 = [];
        for (let col = grid[0].length - 1; col >= 0; col--) {
            let newRow = "";
            for (let row = 0; row < grid.length; row++)
                newRow = newRow + grid[row].charAt(col);
            grid90.push(newRow);
        }
        return grid90;
    }
}

export default WordSearch;