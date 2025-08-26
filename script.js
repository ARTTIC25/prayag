// Create floating animated boxes
for (let i = 0; i < 50; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.left = Math.random() * 100 + "vw";
    box.style.animationDuration = (10 + Math.random() * 10) + "s";
    box.style.opacity = Math.random();
    box.style.width = box.style.height = (20 + Math.random() * 60) + "px";
    document.body.appendChild(box);
  }
  