export function Snake(row,col){
    window.addEventListener('keydown', function(e) {return that.turn(e)});
    let that = this;
    this.points = 0;
    this.position ={
         x:col,
         y:row
     }

    this.direction = 1;
    this.snakeBody= [];


     this.drawSnake = function(){
         if(this.snakeBody.length > 0 ){
             let cellId = this.snakeBody[this.snakeBody.length-1].y + ',' + this.snakeBody[this.snakeBody.length-1].x;
             let lastPixel = document.getElementById(cellId);
             lastPixel.classList.remove('snake');
             this.snakeBody.splice(-1,1);
         }
         this.snakeBody.unshift({
             x:this.position.x,
             y:this.position.y
         })
         this.snakeBody.map((pixel)=>{
             let cellId = pixel.y + ',' + pixel.x;
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
         let cellId = this.position.y + ',' + this.position.x;
         this.snakeCell = document.getElementById(cellId);
         let appleColor = window.getComputedStyle(this.snakeCell,null).getPropertyValue('background-color');
         let colorIndicator = document.getElementById('color').style.backgroundColor;

         if(this.snakeCell.classList.contains('apple')){
             if(appleColor == colorIndicator){
                 this.points +=50;
                 this.addPixel();
             }else{
                 this.points +=10;
             }
             this.snakeCell.classList.remove('apple');
             let score = document.getElementById('score');
             score.innerHTML = this.points;

         }
         if(this.snakeCell.classList.contains('snake')){
             this.dead();
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
         console.log('game over');
    }
}