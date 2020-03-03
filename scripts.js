function main (){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    canvas.width=width;
    canvas.height=height;
    canvas.style.border="3px solid black";

    addEventListener('click', click);
    
    //==========
        run();
}

function click(event){
    if(state==states.play){
        state=states.playing;
    }else if(state==states.playing){
        if(char.right){
            char.right=false;
        }else{
            char.right=true;
        }
    }
}

function run(){
    att();
    draw();
    setTimeout(run, 1000/fps);
}

function att(){
    
    if(state==states.playing){
        //char=====
            char.att();
        //zombies====
            zombies.att();
        //colision========
            colision();
        //spawn=======
            zombies.autoSpawn();
    }
}

function draw(){
    //sky============    
        ctx.fillStyle='#ADD8E3';
        ctx.fillRect(0, 0, width, height);
    //floor=========
        ctx.drawImage(floor, 0, 650)
    //char====
        char.draw();
    //zombies====
        zombies.draw();
    //score=================================================
        ctx.save();
        ctx.translate(width/2,height/2)
        ctx.fillStyle='black'
        ctx.font='40px arial'
        if(state==states.playing){
            if(score<10  &&  score>=0){
                ctx.fillText(score, -11, -320)
            }else if(score<100  && score>=10){
                ctx.fillText(score, -22, -320)
            }else if(score <1000 && score>=100){
                ctx.fillText(score, -33, -320)
            }else if(score>=1000){
                ctx.fillText(score, -44, -320)
            }
        }else if(state==states.lose){
            ctx.font='60px arial'
            ctx.fillText('score:',-75, -50)
            if(score<10  &&  score>=0){
                ctx.fillText(score, -16, 0)
            }else if(score<100  && score>=10){
                ctx.fillText(score, -32, 0)
            }else if(score <1000 && score>=100){
                ctx.fillText(score, -48, 0)
            }else if(score>=1000){
                ctx.fillText(score, -64, 0)
            }
        }
        ctx.restore();
    //play========
        if(state==states.play){
            ctx.save();
            ctx.translate(width/2, height/2)
            ctx.fillStyle='black';
            ctx.font='60px arial'
            ctx.fillText('play', -64, 0)
            ctx.restore();
        }
}

main();