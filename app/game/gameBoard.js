export function createGrid(x,y){
    let container = document.getElementById('container');
    let board = document.createElement('div');
    board.className = 'board';
    container.appendChild(board);
    for (let i = 0; i <x*y; i++){
        let cell = document.createElement ('div');
        cell.className = 'cell';
        if(i%x ==0){
            let row = document.createElement ('div');
            row.id = 'row'+i/x;
            row.className = 'row';
            row.appendChild(cell)
            console.log('row'+ i/x);
            board.appendChild(row);
        }else{
            let rowId = 'row' + parseInt(i/x,10);
            console.log(rowId);
            debugger;
            let row = document.getElementById(rowId);
            row.appendChild(cell);
        }

    };

}