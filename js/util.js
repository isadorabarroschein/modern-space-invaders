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

    
