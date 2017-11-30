import * as GameBoard from './gameBoard';
import * as CreateSnake from './Snake';
import * as CreateApple from './Apple';

export function start(){


    let board_width = 40;
    let board_height = 40;
    let gameOn = true;

    let colors = [
        {purple:'#a50fef'},
        {green:'#63da47'},
        {pink:'#f90f6e'},
        {orange: '#f5882c'}
        ];

    GameBoard.createGrid(board_width, board_height);

    let Snake = new CreateSnake.Snake(parseInt(board_width/2), 0);

        let snakeInterval =  window.setInterval(function(){
        if( Snake.position.x<board_width &&
            Snake.position.y< board_height &&
            Snake.position.x>-1 &&
            Snake.position.y>-1
        ){
            Snake.move();
        }else{
            Snake.dead();
            gameOn = false;
            window.clearInterval(snakeInterval
            );
        }
    }, 200);

    let appleInterval = window.setInterval(()=>{
        let ranX = Math.floor(Math.random() * board_width);
        let ranY = Math.floor(Math.random() * board_height);
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let colorName  = Object.keys(colors[randomColorIndex])[0]
        let apple = new CreateApple.Apple(ranX, ranY, colorName);
        if(gameOn &&
            !apple.appleCell.classList.contains('snake')
        ){
            apple.drawApple();
        }
    },2000)

    let colorInterval = window.setInterval(()=>{
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let color =document.getElementById('color');
        color.style.backgroundColor = Object.values(colors[randomColorIndex])[0];
    },3000)

}

