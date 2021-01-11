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
