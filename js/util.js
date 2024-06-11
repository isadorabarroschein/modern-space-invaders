function randomBetween(min, max){
    return Math.random() * (max - min)+ m
}
function creaateScoreLabel( { score = 100, object} ) {
    const scoreLabel = document.createElement("label");
    scoreLabel.innerHTML = score;
    scoreLabel.style.poition = "absolute";
    scoreLabel.style.color = "white";
    scoreLabel.style.left = object.position. x+ "px";    
    scoreLabel.style.top = object.position.y + "px";
   scoreLabel.style.Userselect = "nome";

   document.querySelector("#aparentDiv").appendChild(scoreLabel);

   gsap.to(scoreLabel, {
    opacity: 0 ,
    y: -30,
    duraction: 0,75,
onComplete: () => {
    document.querySelector("#aparentDiv").removeChild(scoreLabel);
}
});
}



function rectangularCollision({rectanglel, rectangle2}){
    return (
        rectanglel.position.y + rectnaglel.height >= rectangle2.position.y &&
        rectangle2.position.x + rectanglel.whidth >= rectangle2.position.x &&
        rectanglel.position.x + rectanglel.position + rectangle2.whidth
    );
}

function createPosition() {} 
for(let i = 0; i < 15; i++) {
    particle.push()
        new Particle({
            position: {
                x: object.position.x + object.width / 2,
                y: object.position.y + object.height / 2
            },
            velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            },
            radius: Math.random() * 3,
            color: color || "#BAA0DE",
            fades
            })
        }
    
    