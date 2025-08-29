// Sudoku grid size
const SIZE = 9;

let to_verify = [];
for (let i = 0; i < SIZE; i++) {
    let row = [];
    for (let j = 0; j < SIZE; j++)
        row.push(0);
    to_verify.push(row);
}

// Parse an array of 1 dimension to an array of 2 dimensions
function parse_to_2d(source, target) {
    for (let i = 0; i < SIZE; i++) {
        let numbers = source[i].split(' ').map(Number);
        for (let j = 0; j < SIZE; j++)
            target[i][j] = numbers[j];
    }
}

// Display an array in an HTML table
function displayArrayInTable(array) {
    // create table element and add borders
    const table = document.createElement('table');
    table.setAttribute('style', 'border: 1px solid black');

    for (const row of array) {
        // create a row element and append it to the table
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (const col of row) {
            // create a column and append it to its row
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(col));
            td.setAttribute('style', 'border: 1px solid black; padding: 10px 15px;');
            tr.appendChild(td);
        }
    }
    // append table to the document body
    document.body.appendChild(table);
}

// Convert 1D array to 2D grid
parse_to_2d(array_number, to_verify);
// Display grid in HTML file
displayArrayInTable(to_verify);