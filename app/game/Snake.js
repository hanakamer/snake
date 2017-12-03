export function Snake(row,col, boardName, gameType){
    window.addEventListener('keydown', function(e) {return that.turn(e)});
    let that = this;
    this.alive = true;
    this.points = 0;
    this.ate = false;
    this.position ={
         x:col,
         y:row
     }
    this.direction = 1;
    this.snakeBody= [];
    document.getElementById('score').innerHTML = 'SCORE: ' + this.points;
     this.drawSnake = function(){
         if(this.snakeBody.length > 0 ){
             let cellId = boardName + '-' + this.snakeBody[this.snakeBody.length-1].y + ',' + this.snakeBody[this.snakeBody.length-1].x;
             let lastPixel = document.getElementById(cellId);
             lastPixel.classList.remove('snake');
             this.snakeBody.splice(-1,1);
         }
         this.snakeBody.unshift({
             x:this.position.x,
             y:this.position.y
         })
         this.snakeBody.map((pixel)=>{
             let cellId = boardName + '-' + pixel.y + ',' + pixel.x;
             pixel = document.getElementById(cellId);
             pixel.classList.add('snake');
         })
     }
     
     this.addPixel = function () {
         switch(this.direction) {
             case 1:
                 this.snakeBody.push({
                     x : this.position.x-1,
                     y : this.position.y
                 })
                 break;
             case 2:
                 this.snakeBody.push({
                     x : this.position.x,
                     y : this.position.y-1
                 })
                 break;
             case 3:
                 this.snakeBody.push({
                     x : this.position.x+1,
                     y : this.position.y
                 });
                 break;
             case 4:
                 this.snakeBody.push({
                     x : this.position.x,
                     y : this.position.y+1
                 });
                 break;
         }

     }

     this.move = function(){

         switch(this.direction) {
             case 1:
                 this.position.x += 1;
                 break;
             case 2:
                 this.position.y += 1;
                 break;
             case 3:
                 this.position.x -= 1;
                 break;
             case 4:
                 this.position.y -= 1;
                 break;
         }
         let cellId =boardName + '-' + this.position.y + ',' + this.position.x;
         this.snakeCell = document.getElementById(cellId);
         if(this.snakeCell.classList.contains('snake')){
             this.dead();
         }
         let appleColor = window.getComputedStyle(this.snakeCell,null).getPropertyValue('background-color');
         let colorIndicator = document.getElementById('app-container').style.borderColor;

         if(this.snakeCell.classList.contains('apple')){
             if(appleColor == colorIndicator &&
                gameType == "wall"
             ){
                 this.points +=50;
                 this.addPixel();
                 this.removeRow(this.snakeCell.classList[2])
             }else{
                 this.points +=10;
                 if(gameType == "classic"){
                     this.addPixel();
                     this.ate = true;
                 }
             }
             this.snakeCell.classList.remove('apple');
             let score = document.getElementById('score');
             score.innerHTML = 'SCORE: '+ this.points;

         }

         this.drawSnake();
     }
     this.turn = function(e){
         switch(e.keyCode) {
             case 39://right
                 this.direction = 1;
                 break;
             case 40: //down
                 this.direction = 2;
                 break;
             case 37: //left
                 this.direction = 3;
                 break;
             case 38: //up
                 this.direction = 4;
                 break;
         }
    }

    this.dead = function (){
         this.alive = false;
        let alert = document.getElementById('score');
        alert.innerHTML = 'GAME OVER'
    }

    this.removeRow = function(color){
        let board = document.getElementById('wall-board');
        let row = document.getElementsByClassName('row '+color)[0];
        if(row){
            board.removeChild(row);
        }

    }
}