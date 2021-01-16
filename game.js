function load_images(){
    //player,virus,gem
    
    enemy_image = new Image;
    enemy_image.src="enemy.jpeg";
    
    player_image= new Image;
    player_image.src="player.jpeg";
    
    gem_image= new Image;
    gem_image.src="gem.jpeg";
}

function init(){
    //define the objects that we will have in the game

    canvas=document.getElementById("mycanvas");
    console.log(canvas);
     W = 700;
    H = 400;
    
     canvas.width = W ;
    canvas.height = H ;
    
    game_over=false;
    //create a context
    
     pen = canvas.getContext('2d');
    console.log(pen);

    e1={
        x: 150,
        y: 50,
        w: 60,
        h: 60,
        speed:20
    };

    e2={
        x: 300,
        y: 150,
        w: 60,
        h: 60,
        speed:30
    };

     e3={
        x: 450,
        y: 20,
        w: 60,
        h: 60,
        speed:40
    };
    
    enemy=[e1,e2,e3];
    
    
    player={
        x:20,
        y:H/2,
        w:60,
        h:60,
        speed:20,
        moving :false,
        health: 100,
    }
    
    gem={
        x:W-100,
        y:H/2,
        w:60,
        h:60,
    }
    
    canvas.addEventListener('mousedown',function(){
        console.log('mouse pressed');
        player.moving=true;
    });
    
    canvas.addEventListener('mouseup',function(){
        console.log('mouse released');
        player.moving=false;
    });
}

function isOverLap(rect1,rect2){
    if(rect1.x < rect2.x +rect2.w &&
       rect1.x + rect1.w >rect2.x &&
       rect1.y < rect2.y +rect2.h &&
       rect1.y + rect1.h >rect2.y )
        {
            return true;
        }
        return false;
}

function draw(){
    
    //clear the canvas area for theold frame
    
    pen.clearRect(0,0,W,H);

     //draw the player
    
    //draw the gem
    
    pen.drawImage(player_image,player.x,player.y,player.w,player.h);
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);

     pen.fillStyle= "red";
    //pen.fillRect(box.x,box.y,box.w,box.h);
    //pen.drawImage(enemy_image,box.x,box.y,box.w,box.h);

     for(let i=0;i<enemy.length;i++)
    {
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }
    
    pen.fillStyle="white";
    pen.fillText("score"+player.health,10,10);
}
