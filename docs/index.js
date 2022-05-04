
function go(){
    setInterval(snake,1000)
    html='<article><div><img src="pngfind.com-arrow-marks-png-734882.png" id="i1"></div>'   
    html+='<div><img src="letter_p.png" id="i2"><p>Pause</p></div></article>'
    document.getElementById('sec').innerHTML=html
    t=0
}

function xo()
{
    window.location = ('xo.html') 
}

function snake()
{
    t+=1
    if(t==3)
    {
        window.location = ('snake.html') 
    }
}