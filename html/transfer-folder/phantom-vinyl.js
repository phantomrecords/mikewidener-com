// phantom-vinyl.js
document.addEventListener("DOMContentLoaded", () => {
  const phantomHover = document.getElementById("phantom-hover");
  if (!phantomHover) return;

  const vinylScratch = new Audio('./sounds/record-scratch.mp3');
  let isSpinning = false;

  phantomHover.addEventListener("click", () => {
    isSpinning = !isSpinning;

    const imgToSpin = phantomHover.querySelector(".hover-img");

    if (isSpinning) {
      console.log("Spinning started");
      vinylScratch.play();
      imgToSpin.classList.add("spin-record");
    } else {
      console.log("Spinning stopped");
      imgToSpin.classList.remove("spin-record");
    }
  });
});
