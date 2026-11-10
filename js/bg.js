const bg = document.getElementById("bg-flower");
const flowers = ["💗","🌸"];
for (let i = 0; i < 10; i++) {
  const flower = document.createElement("div");
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  flower.classList.add("heart-fall");
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.top = Math.random() * -100 + "px";
  flower.style.fontSize = Math.random() * 15 + 15 + "px";
  flower.style.animationDuration = Math.random() * 5 + 5 + "s";
  flower.style.animationDelay = Math.random() * 5 + "s";
  bg.appendChild(flower);
}
