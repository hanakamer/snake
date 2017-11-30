export function Apple(x, y, color, boardName){
    this.position = {
        x:x,
        y:y
    }

    let cellId = boardName + '-' + this.position.y + ',' + this.position.x;
    this.appleCell = document.getElementById(cellId);

    this.drawApple = function (){
        this.appleCell.classList.add('apple');
        this.appleCell.classList.add(color);
    }

}