export function Brick(x,y,boardName){
    this.counter = 0;
    let container = document.getElementById(boardName+'-container');

    let board = document.createElement('div');
    board.className = 'board';
    board.id = boardName+'-board';
    container.appendChild(board);


    this.addRow =function(color){
        let counter = board.childElementCount;
       if (counter<y){
           let row = document.createElement ('div');
           row.className = 'row';
           row.id = boardName + '-' + 'row'+ this.counter;
           for(let i=0; i<x;i++) {
               let cell = document.createElement('div');
               cell.className = "cell";
               row.appendChild(cell);
               row.classList.add(color);

           }
           board.appendChild(row);
           return true;
       } else{
           return false;
       }
    }



}