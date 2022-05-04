lign=''
map=''
mapid=0;
best_score=0




for(i=0;i<27;i++){
    lign+='<div id="score"></div><div class="f">'
    for(j=0;j<27;j++)
    
    {
        mapid+=1;
        d_id='y'+i+'x'+j
        
        if(d_id=='y0x'+j || d_id=='y26x'+j || d_id=='y'+i+'x0' || d_id=='y'+i+'x26')
        {
            lign+='<div id="'+d_id+'" class="map bar"></div>';
        }
        else{
            lign+='<div id="'+d_id+'" class="map"></div>';
        }
    }
    lign+='</div>'
    map+=lign
    lign=''
}
 
setInterval(start,70)
function start_game()
{
    document.getElementById('sect').innerHTML=map   
    mapid=0;
    x=7
    y=7
    id_f_div=new Array
    snake_len=5
    timing=0
    r_id=''
    dir=null
    r=0
    dir='ArrowRight'
    score=0
    sp_c=0
}

function newgame()
{
    player=prompt('enter your name :')
    if(player=='')
    {
        player='unknown player'
    }
    start_game()
}

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;
    if(e.key=='ArrowRight' || e.key=='ArrowLeft' || e.key=='ArrowUp' || e.key=='ArrowDown' )
    {
        dir=e.key
    }
    else if(e.key=='a' || e.key=='s' || e.key=='d' || e.key=='w')
    {
        dir=e.key
    }
    else if(e.key=='p'){
        alert('paused')
        dir=dir
    }
        
    
}



function direction() {
   
    
    if(dir=='ArrowRight' || dir=='d'){
        x++
        
    }
    else if(dir=='ArrowLeft' || dir=='a'){
        x--
    }
    else if(dir=='ArrowUp' || dir=='w'){
        y--
    }
    else if(dir=='ArrowDown' || dir=='s'){
        y++
    }
    
}
    
    







function del_last(){
    if(id_f_div[snake_len]!=null){
        id_f_div.splice(0,1)
    }

    return id_f_div[0]
}


function end()
{
    if(best_score<score){
        document.getElementById('sound').innerHTML=' <audio autoplay > <source src="mixkit-player-losing-or-failing-2042.wav" type="audio/wav"></audio>'
        best_score=score
        localStorage.setItem("max", best_score);
        localStorage.setItem("n_player", player);
        alert('congat!! new record : '+best_score)
    }
    else{
        document.getElementById('sound').innerHTML=' <audio autoplay > <source src="mixkit-player-losing-or-failing-2042.wav" type="audio/wav"></audio>'
        alert('your score : '+score+'\nbest score : '+localStorage.getItem('max')+'; by '+localStorage.getItem('n_player'))
    }
    
    html='<div><input type="button" value="NEW GAME" onclick="newgame()" >'
    html+='<input type="button" value="CONTINUE" onclick="start_game()" ></div>'
    html+='<a href="index.html"><input type="button" value="HOME"></a>'
    document.getElementById('sect').innerHTML=html
}


function lose1(){   
        for (const x of id_f_div.slice(0, -1)) { 
            if(x==id_f_div[snake_len-1])
            {
                end()
            }
        
        } 
}

function lose2(){
    for(i=0;i<27;i++)
        {
            for(j=0;j<27;j++){
                if('y0x'+j ==id_f_div[snake_len-1] || 'y26x'+j ==id_f_div[snake_len-1] || 'y'+i+'x0'==id_f_div[snake_len-1] || 'y'+i+'x26'==id_f_div[snake_len-1])
                {               
                    end()
                    die
                }
            }
        }  
}


function move()
{     
    id='y'+y+'x'+x
    id_f_div.push(id)     
    direction()   
    id_last=del_last()    
    document.getElementById(id).style.backgroundColor="rgb(146, 255, 4)";
    document.getElementById(id_last).style.backgroundColor="rgb(72, 133, 133)";  
    timing++
    
    
    
}


function rand_rp(){
    if(timing==1){
        r_x=Math.floor(Math.random() * 24) + 1;
        r_y=Math.floor(Math.random() * 24) + 1;
        r_id='y'+r_y+'x'+r_x
        for (const x of id_f_div){
            if(r_id!=x){
                
                document.getElementById(r_id).style.backgroundColor="red";    
            }
        }       
    }   
    if(id_f_div[snake_len-1]==r_id){
        snake_len++
        timing=0
        sp_c++
        score++
        document.getElementById('sound').innerHTML='<audio autoplay> <source src="mixkit-arcade-game-jump-coin-216.wav" type="audio/wav"></audio> '
    }
    else if (id_f_div[0]==r_id){
        document.getElementById(r_id).style.backgroundColor="red";
    }
}

 
function reverse()
{
    id_f_div.reverse()
}


function start(){
    
    document.getElementById('score').innerHTML=score
    move()
    rand_rp()
    lose1()
    lose2()
    fix() 
}