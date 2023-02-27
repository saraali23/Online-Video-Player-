var durmin;var dursec;
var prog=document.getElementById("vidProg")
var vid=document.getElementById("vid")
var sp=document.getElementById("vidspan")



document.getElementById("startbtn").onclick=function(){startVid(vid,sp);}
document.getElementById("pausebtn").onclick=function(){stopVid(vid);}
document.getElementById("2backbtn").onclick=function(){
    vid.load();}
document.getElementById("backbtn").onclick=function(){
        vid.currentTime=vid.currentTime-10};

document.getElementById("2forwardbtn").onclick=function(){
        vid.currentTime=vid.duration;
    }
document.getElementById("forwardbtn").onclick=function(){
            vid.currentTime=vid.currentTime+10
    }
    document.getElementById("mutebtn").onclick=function(){
        if (vid.muted === true) {
            vid.muted = false;
          }
        else if (vid.muted === false) {
            vid.muted = true;
        }
}


document.getElementById("vidProg").oninput = function() {
        vid.currentTime =this.value;
      }
document.getElementById("volProg").oninput = function() {
        vid.volume=(this.value/100);
      }
document.getElementById("speedProg").oninput = function() {
        vid.playbackRate =this.value;
      }
setVid(prog,vid,sp);


function setVid(progObj,vidObj,spanObj){
    
    progObj.min=0.0;
    var minutes=0,seconds=0;
    

    setInterval(() => {

        if(vidObj.readyState > 0) {
            setDuratuon(sp);
            progObj.max=vidObj.duration;
            progObj.value=vidObj.currentTime;
            seconds=vidObj.currentTime;
            minutes = Math.floor(seconds / 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
            seconds = Math.floor(seconds % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;
            spanObj.innerText=minutes+":"+seconds +"/"+durmin+":"+dursec;
       }
    }, 200);    
   
}
function startVid(vidObj,){
     vidObj.play();
     
}
function stopVid(vidObj){
    vidObj.pause();
}
function setDuratuon(spanObj){
    durmin = Math.floor(vid.duration / 60);
    durmin = (durmin >= 10) ? durmin : "0" + durmin;
    dursec = Math.floor(vid.duration % 60);
    dursec = (dursec >= 10) ? dursec : "0" + dursec;
}