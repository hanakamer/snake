import * as GameBoard from './gameBoard';
import * as CreateSnake from './Snake';
import * as CreateApple from './Apple';
import * as CreateWall from './Wall';

export function Game(){


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

    let Snake = new CreateSnake.Snake(parseInt(board_width/2), 0, 'game');
     this.wall =  new CreateWall.Brick(4, 40, 'wall');

        let snakeInterval =  window.setInterval(function(){

        if( Snake.position.x<board_width &&
            Snake.position.y< board_height &&
            Snake.position.x>-1 &&
            Snake.position.y>-1 &&
            Snake.alive
        ){
            Snake.move();
        }else{
            gameOn = false;
            gameOver();

        }
    }, 200);

    let appleInterval = window.setInterval(()=>{
        let ranX = Math.floor(Math.random() * board_width);
        let ranY = Math.floor(Math.random() * board_height);
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let colorName  = Object.keys(colors[randomColorIndex])[0]
        let apple = new CreateApple.Apple(ranX, ranY, colorName, 'game');
        if(gameOn &&
            !apple.appleCell.classList.contains('snake')
        ){
            apple.drawApple();
        }

    },2000);

    let colorInterval = window.setInterval(()=>{
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let color = document.getElementById("app-container");
        color.style.borderColor = Object.values(colors[randomColorIndex])[0];
    },3000);

    let wallInterval = window.setInterval(()=>{
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let colorName  = Object.keys(colors[randomColorIndex])[0]
        gameOn = this.wall.addRow(colorName);
        if(!gameOn){
            gameOver();
        }
    },2500);

    function gameOver() {
        window.clearInterval(wallInterval);
        window.clearInterval(snakeInterval);
        window.clearInterval(colorInterval);
        window.clearInterval(appleInterval);

    }

}

