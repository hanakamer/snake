import * as game from './game/play';


window.start = function start(gameType){
    resetGame();
    game.Game(gameType);
    document.getElementById('start-popup').style.display='none';
    document.getElementById('restart-popup').style.display='none';
}
window.restart = function restart(){
    document.getElementById('restart-popup').style.display='none';
    resetGame();
    game.Game('wall');
}
function resetGame (){
    deleteBoard('game');
    deleteBoard('wall');
}


function deleteBoard(boardName){
    let container =  document.getElementById(boardName+'-container');
    let board =  container.getElementsByClassName('board')[0]
    if(board){
        container.removeChild(board);
    }
}

