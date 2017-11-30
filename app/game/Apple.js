export function Apple(x, y, color){
    this.position = {
        x:x,
        y:y
    }

    let cellId = this.position.y + ',' + this.position.x;
    this.appleCell = document.getElementById(cellId);

    this.drawApple = function (){
        this.appleCell.classList.add('apple');
        this.appleCell.classList.add(color);
    }

}