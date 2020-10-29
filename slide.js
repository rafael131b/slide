
window.load=fotos(1)

var player=document.getElementById('player')
var avancar=document.getElementById('proximo')
var voltar=document.getElementById('anterior')

var album=1
function fotos(a){
    

    document.getElementById('painel').style.backgroundImage="url(foto/a"+a+".jpg)"
    
}

function proximo(){
 if(album<4){
     album++
     fotos(album)
 }else{
     album=1
 }
 

}
function anterior(){
if (album>1){


album--
fotos(album)
}else{
    album=4
}

}


function play(){


    setInterval(anterior,1000)
    fotos(album)
    player.style.opacity='0'
    avancar.style.opacity='0'
    voltar.style.opacity='0'
    
    
    

    
}







function relogio(){
     var time=new Date()
     var hora=time.getHours()
     var min=time.getMinutes()
     var seg=time.getSeconds()

     

     var clock=document.getElementById('temporando')

     


    if (seg<10){
        seg='0'+seg
    }if(min<10){
        min='0'+min
    }if(hora<10){
        hora='0'+hora
    }


    var tempoTotal=`${hora}:${min} :${seg} `
     
    clock.innerHTML=tempoTotal



}  


setInterval(relogio,500)

document.getElementById('proximo').addEventListener('click',proximo)
document.getElementById('anterior').addEventListener('click',anterior)
comecar=document.getElementById('player').addEventListener('click',play)





