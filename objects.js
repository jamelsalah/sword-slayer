var canvas, ctx, fps=50, width=400, height=700, score=0,state=0,spawn=0;
var states={
    play:0,
    playing:1,
    lose:2,
}
var char={
    x:1,
    y:height-50,
    w:133,
    h:83,
    right:true,
    speed:5,

    att(){
         if(this.right  &&  this.x+this.w<width){
            this.x+=this.speed;
        }else if(!this.right  &&  this.x>0){
            this.x-=this.speed;
        }
    },

    draw(){
        if(this.right){
            ctx.drawImage(sprite_char_right001, this.x, this.y-this.h);
        }else{
            ctx.drawImage(sprite_char_left001, this.x, this.y-this.h);
        }
    }
}


function zombie_right(){
    this.right=true,
    this.x=-42,
    this.y=height-126,
    this.w=42,
    this.h=76,
    this.dead=false,
    this.speed=zombies.speed(),
    this.animation=0
}

function zombie_left(){
    this.right=false,
    this.x=width,
    this.y=height-126,
    this.w=42,
    this.h=76,
    this.dead=false,
    this.speed=zombies.speed(),
    this.animation=0
}


var zombies={
    zombies:[],
    counter:0,
    spawn(){
        let direction=Math.floor(Math.random()*2);
        if(direction){
            let zombie=new zombie_right();
            this.zombies.push(zombie);
        }else{
            let zombie=new zombie_left();
            this.zombies.push(zombie);
        }
    },

    autoSpawn(){
        if(!this.counter){
            this.spawn();
            this.counter=Math.floor(Math.random()*50)
        }else{
            this.counter--
        }
    },

    att(){
        let len=this.zombies.length;
        for(i=0; i<len; i++){
            let zombie=this.zombies[i];
            if(zombie.animation){
                this.zombies[i].animation--
            }else{
                this.zombies[i].animation=30
            }
            if(zombie.right){
                this.zombies[i].x+=zombie.speed;
            }else{
                this.zombies[i].x-=zombie.speed;
            }
        }
    },

    draw(){
        let len=this.zombies.length;
        for(i=0; i<len; i++){
           let zombie=this.zombies[i];
           if(zombie.right){
                    if(zombie.animation>=1  &&  zombie.animation<=5){
                        zombie_walk001.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=6  &&  zombie.animation<=10){
                        zombie_walk002.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=11  && zombie.animation<=15){
                        zombie_walk003.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=16  && zombie.animation<=20){
                        zombie_walk004.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=21  && zombie.animation<=25){
                        zombie_walk005.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=26  && zombie.animation<=30){
                        zombie_walk006.draw(zombie.x, zombie.y);
                    }
           }else{
                    if(zombie.animation>=1  &&  zombie.animation<=5){
                        zombie_walk007.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=6  &&  zombie.animation<=10){
                        zombie_walk008.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=11  && zombie.animation<=15){
                        zombie_walk009.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=16  && zombie.animation<=20){
                        zombie_walk010.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=21  && zombie.animation<=25){
                        zombie_walk011.draw(zombie.x, zombie.y);
                    }else if(zombie.animation>=26  && zombie.animation<=30){
                        zombie_walk012.draw(zombie.x, zombie.y);
                    }
                }
            }
        
    },

    speed(){
        return (Math.floor(Math.random()*3)+1)+0.05*score;
    }

}



function colision(){
    let len=zombies.zombies.length;
    for(i=0; i<len; i++){
        let zombie=zombies.zombies[i];
        if(zombie.right){
            if(zombie.x+zombie.w>=char.x+30  &&  char.right){
                state=states.lose
            }else if(zombie.x+zombie.w>=char.x+15  &&  !char.right){
                zombies.zombies.splice(i,1)
                score++
                len--
                i--
            }
        }else{
            if(zombie.x<char.x+char.w-15 &&  char.right){
                zombies.zombies.splice(i,1)
                score++
                len--
                i--
            }else if(zombie.x<char.x+char.w-30  &&  !char.right){
                state=states.lose
            }
        }
    }
}