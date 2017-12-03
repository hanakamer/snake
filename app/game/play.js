import * as GameBoard from './gameBoard';
import * as CreateSnake from './Snake';
import * as CreateApple from './Apple';
import * as CreateWall from './Wall';

export function Game(gameType){

    let board_width = 40;
    let board_height = 40;
    let gameOn = true;

    let colors = [
        {purple:'#a50fef'},
        {green:'#63da47'},
        {pink:'#f90f6e'},
        {orange: '#f5882c'}
        ];

    GameBoard.createGrid(board_width, board_height, 'game');

    this.snake = new CreateSnake.Snake(parseInt(board_width/2), 0, 'game', gameType);
    createApple(this.snake);
    let that  = this;
    this.snakeInterval =  window.setInterval(function(){
        if( that.snake.position.x<board_width &&
            that.snake.position.y< board_height &&
            that.snake.position.x>-1 &&
            that.snake.position.y>-1 &&
            that.snake.alive
        ){
            that.snake.move();
            if(gameType == 'classic' && that.snake.ate){
                createApple(that.snake);
            }
        }else{

            if( that.snake.alive){
                window.alert('you hit the wall');
            }else{
                window.alert('you hit yourself');
            }
            gameOver();
            gameOn = false;


        }
    }, 100);



    if(gameType == 'wall'){
        this.wall =  new CreateWall.Brick(4, 40, 'wall');
        this.appleInterval = window.setInterval(()=>{
            createApple(that.snake);
        },2000);

        this.colorInterval = window.setInterval(()=>{
            changeColor();
        },3000);

        this.wallInterval = window.setInterval(()=>{
            addRow(this.wall);
        },2500);
    }
    function createApple(snake){
        let ranX = Math.floor(Math.random() * board_width);
        let ranY = Math.floor(Math.random() * board_height);
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let colorName  = Object.keys(colors[randomColorIndex])[0]
        let apple = new CreateApple.Apple(ranX, ranY, colorName, 'game');
        if(gameOn &&
            !apple.appleCell.classList.contains('snake')
        ){
            apple.drawApple();
            snake.ate = false;
        }else{
            debugger;
            gameOver();
        }
    }
    function changeColor(){
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let color = document.getElementById("app-container");
        color.style.borderColor = Object.values(colors[randomColorIndex])[0];
    }

    function addRow(wall){
        if(gameOn){
            let randomColorIndex = Math.floor(Math.random() * colors.length);
            let colorName  = Object.keys(colors[randomColorIndex])[0];
            gameOn = wall.addRow(colorName);
        }else{
            window.alert('the bar is full');
            gameOver();
        }
    }
    function gameOver() {
        that.snake.dead();
        resetIntervals();
        let popup = document.getElementById('restart-popup');
        popup.children[0].innerHTML = 'SCORE: '+ that.snake.points;
        popup.style.display='block';


    }
     function resetIntervals (){
        window.clearInterval(that.wallInterval);
        window.clearInterval(that.snakeInterval);
        window.clearInterval(that.colorInterval);
        window.clearInterval(that.appleInterval);
    }


}

