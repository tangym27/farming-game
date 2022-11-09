let myCow;
let milks = [];
let poops = [];
let myBucket;
let milkPoint = 0;

class Cow{
    constructor(x,y){
    this.x = x;
    this.y = y;
    this.pic = cowPic;
    }
    displayAndMove(){
    image(this.pic, this.x, this.y);
    }
}

class Milk{
    constructor(){
    this.collected = false;
    this.pic = milkPic;
    this.x = random(40,640);
    this.y = random(-1000,-100);;
    this.speed = random(2,5);
    this.noiseLocation = random(0,1000);
    }
    displayAndMove(){
    if (this.collected == false){
        this.y += this.speed;
        let moveAmount = map(noise(this.noiseLocation), 0,1,-2,2);
        this.x += moveAmount;
        this.noiseLocation += 0.01;
        this.x = constrain(this.x, 40, 600);
    }

        //if player collects milk
        if (dist(this.x, this.y, myBucket.x, myBucket.y) < 50){
            milkPoint ++;
            this.collected = true;
            this.x = -100;
            this.y = -100;
        }

        //if player doesnt collect
        if (this.y > height){
            this.x = random(40, 640);
            this.y = random(-1000,-100);
            this.speed = random(2,5);
            this.noiseLocation = random(0,1000);

        }

        image(this.pic, this.x, this.y)

    }


}

class Poop{
    constructor(){
    this.pic = poopPic;
    this.x = random(40,640);
    this.y = random(-1000,-100);;
    this.speed = random(2,5);
    this.noiseLocation = random(0,1000);
    }
    displayAndMove(){
        this.y += this.speed;
        let moveAmount = map(noise(this.noiseLocation), 0,1,-2,2);
        this.x += moveAmount;
        this.noiseLocation += 0.01;
        this.x = constrain(this.x, 40, 600);


        //if player collects poop
        if (dist(this.x, this.y, myBucket.x, myBucket.y) < 50){
            gameState = "endCowGame";
            cowGameState = false;
            inventory["milk"] += milkPoint;
        }

        //if player doesnt collect
        if (this.y > height){
            this.x = random(40, 640);
            this.y = random(-1000,-100);
            this.speed = random(2,5);
            this.noiseLocation = random(0,1000);

        }

        image(this.pic, this.x, this.y)

    }


}

class Bucket{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.pic = bucketPic;

    }
    displayAndMove(){
        this.x = constrain(this.x, 0, 570);
        image(this.pic, this.x, this.y);
    }

}

function cowGameReset(){
    if (cowGameState == false){
        milkPoint = 0;
        milks = [];
        poops = [];
        for (let i = 0; i < 10; i++){
            milks.push(new Milk());
        }
        for (let i = 0; i < 20; i++){
            poops.push(new Poop());
        }
        cowGameState = true;
    }

}

function cowGameStart(){
    cowGameReset()
    fill(0);
    text("Milk Count: "+ milkPoint, 20, 20);
    myCow.displayAndMove();
    for (let i = 0; i < milks.length; i++){
        milks[i].displayAndMove();
    }
    for (let i = 0; i < poops.length; i++){
        poops[i].displayAndMove();
    }
    if (keyIsDown(65)){
        myBucket.x -= 5;
    }
    if (keyIsDown(68)){
        myBucket.x += 5;
    }

    myBucket.displayAndMove();

    if (milkPoint == 10){
        gameState == "endCowGame";
        cowGameState = false;
        inventory["milk"] += milkPoint;
    }


}