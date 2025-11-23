
let cat = document.querySelector(".persiancatimg");
let result = document.querySelector(".pop-up");
let arrow = document.querySelector(".arrowz");
let toneEmoji = "";

cat.addEventListener("click", function(){
for (let i = 99; i >= 0; i--){
song = "There's " + i + " persian cats slaying on grandma's couch! " + toneEmoji + " ";
console.log(song);
arrow.style.display = 'block';
result.insertAdjacentHTML("beforeend", song);
if (i === 100){
toneEmoji = "😻";
}
else if(i >= 75){
toneEmoji = "😽";
}
else if(i >= 50){
    toneEmoji = "😼";
}
else if(i > 25){
    toneEmoji = "🙀";
}
else if(i < 25){
    toneEmoji = "😿";
}
}
});

