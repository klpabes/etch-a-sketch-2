'use strict'

const mainDiv = document.querySelector('.main-div');
const cellSetBtn = document.querySelector('.cell-set');

let cellCount = 16;

//set gridCell count
cellSetBtn.addEventListener('click', function() {
    cellCount = prompt('Input cell count (max: 100)');
    if (cellCount < 0 || cellCount > 100) return;
    populateDiv(cellCount);
})

function populateDiv (cellCount) {
    // reset div
    mainDiv.innerHTML = '';

    //populate div
    for (let i = 0; i < (cellCount**2);i++) {
        let cell = document.createElement('div');
        cell.setAttribute('style', `border: black solid 1px; flex-grow: 1; width: calc(100% / ${cellCount});`);
        cell.setAttribute('class', 'cell-grid');
        mainDiv.appendChild(cell);
    }

    //add grid cells with change color on mousehover effect
    const cells = document.querySelectorAll('.cell-grid');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', function (e) {
            cell.style.backgroundColor = 'black';
        })
    });
}

populateDiv(cellCount);