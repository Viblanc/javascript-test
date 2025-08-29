// check if all rows are valid
function checkRows() {
    for (let row = 0; row < SIZE; row++) {
        if (!validArray(to_verify[row])) {
            return {
                error: `Line ${row + 1} incorrect`,
                array: to_verify[row]
            }
        }
    }
}

// check if all columns are valid
function checkColumns() {
    for (let col = 0; col < SIZE; col++) {
        let column = to_verify.map(row => row[col]);
        if (!validArray(column)) {
            return {
                error: `Column ${col + 1} incorrect`,
                array: column
            };
        }
    }
}

// check if all squares are valid
function checkSquares() {
    // calculate index of the invalid square
    const squareIndex = (row, col) => {
        const SQUARE_SIZE = 3;
        const squareRow = Math.floor(row / SQUARE_SIZE);
        const squareCol = Math.floor(col / SQUARE_SIZE);
        return squareRow * SQUARE_SIZE + squareCol + 1;
    };

    for (let row = 0; row < SIZE; row += 3) {
        for (let col = 0; col < SIZE; col += 3) {
            let square = to_verify.slice(row, row + 3).flatMap(r => r.slice(col, col + 3));
            if (!validArray(square)) {
                return {
                    error: `Square ${squareIndex(row, col)} incorrect`,
                    array: square
                };
            }
        }
    }
}

// create a line to append to the table of errors
function createLine({ error, array }) {
    const row = document.createElement('tr');
    const message = document.createElement('td');
    message.appendChild(document.createTextNode(error));
    message.setAttribute('style', 'border: 1px solid black; padding: 10px');
    row.append(message);

    for (const num of array) {
        const col = document.createElement('td');
        col.setAttribute('style', 'border: 1px solid black; padding: 10px');
        col.appendChild(document.createTextNode(num));
        row.append(col);
    }

    return row;
}

// display whether the table contains any errors or is correctly filled
function displayErrors() {
    // check for mistakes in sudoku grid
    const errors = [checkRows(), checkColumns(), checkSquares()];

    if (errors.some(_ => _)) {
        // create table to display errors
        const table = document.createElement('table');
        table.setAttribute('id', 'error_table');
        table.setAttribute('style', 'border: 1px solid black; margin-top: 32px');

        // loop over the errors
        for (const err of errors) {
            table.appendChild(createLine(err));
        }

        // append table to the document body
        document.body.appendChild(table);
    } else {
        const noErrors = document.createTextNode('the table is correct');
        document.body.appendChild(noErrors);
    }
}

displayErrors();