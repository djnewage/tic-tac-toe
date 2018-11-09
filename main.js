let player = 'x';

function input(id){
    if (document.getElementById(id).innerHTML == ''){
        document.getElementById(id).innerHTML = player;
        if (player === 'x'){
            player = 'o';
        }else{
            player ='x';
        }
    }
   
}
