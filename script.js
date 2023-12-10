const min = document.querySelector(".one")
const sec = document.querySelector(".two")
const mili = document.querySelector(".three")
const play = document.querySelector(".play")
const reset = document.querySelector(".reset")
let min1 = 0
let sec1=0
let mili1=0
let start = 1
let myMin=''
let mySec=''
let myMili=''
// min.innerHTML='0'+min1


const minute=()=>{
    
    if (min1<10){
        min1='0'+min1
        

    }
    min.innerHTML=min1
    
    min1++
    


}

const second=()=>{
    if (sec1<10){
        sec1='0'+sec1
        

    }else if(sec1>59){
        sec1=0
    }
    sec.innerHTML=sec1
    sec1++
    
}

const milisecond=()=>{
    if (mili1<10){
        mili1='0'+mili1
        

    }else if(mili1>99){
        mili1=0
    }
    mili.innerHTML=mili1
    mili1++
    
}

minute()
second()
milisecond()

const main =()=>{

    
    if(start==1){
        myMin =setInterval(minute,60000)
        mySec =setInterval(second,1000)
        myMili =setInterval(milisecond,10)
        play.innerHTML="Pause"
        start=0
    }else{
        play.innerHTML="Play"
        clearInterval(myMin)
        clearInterval(mySec)
        clearInterval(myMili)
        start=1


    }}

   
play.addEventListener('click',main)

reset.addEventListener('click',()=>{
    min1=0
    sec1=0
    mili1=0
    
    minute()
    second()
    milisecond()
    clearInterval(myMin)
    clearInterval(mySec)
    clearInterval(myMili)
    play.innerHTML="Play"
    start=1
    
})





