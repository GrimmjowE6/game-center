
var condi=0;
var xscore=0;
var oscore=0;
var y=-1;
var finmatch=0
c=0
var num=0;
condi=cond();
var xoro=[];
for (i=1;i<10;i++){
    xoro[i]=i;
}

html='<section id="game">'
for(i=0;i<3;i++){
    html+='<article>'
    for(j=1;j<4;j++){
        
        html +='<input type="button" onclick="executer('+(j+c)+')" id="'+(j+c)+'" value=".">'
    }
    c=c+3
    html+='</article>'
}
html+='</section>'






function cond() {
    
    if(condi<9){
        condi=condi+1;
    }
    return condi
}


function bingo(varid){
    if (condi==1 || condi==3 || condi==5 || condi==7 || condi==9 ){
        document.getElementById(varid).value="X";
        document.getElementById(varid).style.color="white";
        document.getElementById('turn').innerHTML='<div id="text">Turn Of  '+playero+'</div>';
        
        
        num++
        return xoro[varid]='X'
    }
    else{
        document.getElementById(varid).value="O";
        document.getElementById(varid).style.color="white";
        document.getElementById('turn').innerHTML='<div id="text">Turn Of  '+playerx+'</div>';
        num++
        return xoro[varid]='O'
    }

    
}

function winner(a,b,c){
    if(xoro[a]==xoro[b] && xoro[b]==xoro[c]){
        if (xoro[a]=='X'){
            alert('winner is : '+playerx ) 
            xscore++
            finmatch=1;
            restart();
            
        }
        else{
            alert('winner is : '+playero) 
            oscore++
            finmatch=1;
            restart();
            
        }
    }
 }



function restart(){
    document.getElementById("game").remove();
    document.getElementById('sect').innerHTML=html;
    num=0;
    finmatch=0;

    if (y==0){
            condi=-1;
            y=1
            
        }
        else {
            condi=0;
            y=0
        }
        
    for(i=1;i<10;i++){
        xoro[i]=i;
    } 
}
    
function gameplay()
{
    if (playero==''){
        playero='O'
    }
    if (playerx==''){
        playerx='X'
    }
    document.getElementById('start').style.display='none';
    document.getElementById('turn').innerHTML='<div id="text">Turn Of  '+playero+'</div>';
    document.getElementById('sect').innerHTML=html;
}


function star(){
    playero=prompt('player 1 : ');
    playerx=prompt('player 2 : ');
    ototscore=[]
    xtotscore=[]
    gameplay()
}


function end(player,score){   
    document.getElementById("game").remove();
    document.getElementById("text").remove();
    alert('final winner is : '+player+'\n score :'+score)

    scorehtml='<table >';
    scorehtml+='<tr><td class="t1">'+playero+'</td><td class="t1">'+playerx+'</td></tr>';
    for(i=0;i<xtotscore.length;i++){
        scorehtml+='<tr><td>'+ototscore[i]+'</td><td>'+xtotscore[i]+'</td></tr>';
    }
    scorehtml+='</table>';
    btns='<input type="button" value="NEW GAME" onclick="star()" id="start">'
    btns+='<input type="button" value="CONTINUE" onclick="gameplay()" id="start"><br>'
    btns+='<a href="index.html"><input type="button" value="HOME" id="start"></a>'
    
    document.getElementById("sect").innerHTML=btns+scorehtml;
    
    oscore=0;
    xscore=0; 
}


function scoretable(){
    
    alert(scorehtml)
}




function executer(varid){
    cond();
    bingo(varid);
    winner(1,2,3)
    winner(4,5,6)
    winner(7,8,9)
    winner(1,4,7)
    winner(2,5,8)
    winner(3,6,9)
    winner(1,5,9)
    winner(3,5,7)
    if(num==9 && finmatch!=1){
        alert('tie'); 
        restart()
    }
    if (xscore+oscore==5){
        if(xscore>oscore){       
            xtotscore.push('win')
            ototscore.push('lose')
            end(playerx,xscore)
        }
        else{     
            ototscore.push('win')
            xtotscore.push('lose')
            end(playero,oscore)
            
        }
    }
}




