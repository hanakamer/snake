export function createGrid(x,y,name){
    let container = document.getElementById(name+'-container');

    let board = document.createElement('div');
    board.className = 'board';
    container.appendChild(board);
    for (let i = 0; i <x*y; i++){
        let cell = document.createElement ('div');
        let rowNum =  parseInt(i/x,10);
        let cellNum = parseInt(i%y, 10);
        cell.className = 'cell';
        if(i%x ==0){
            let row = document.createElement ('div');
            row.id =name + '-' + 'row'+ rowNum;
            row.className = 'row';
            row.appendChild(cell)
            board.appendChild(row);
        }else{
            let rowId =name + '-'+ 'row' + parseInt(i/x,10);
            let row = document.getElementById(rowId);
            row.appendChild(cell);
        }
        cell.id =name + '-' + rowNum + ',' + cellNum;
    };
}