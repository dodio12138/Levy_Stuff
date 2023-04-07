window.onload = function() {
    const container = document.getElementById("container");
    const rabbit = document.getElementById("rabbit");
    const forbidden = document.getElementById("forbidden");

    let grassCount = 0;
    let eating = false;

    document.addEventListener("click", function(event) {
      if (!eating) {
        const x = event.clientX;
        const y = event.clientY;

        const grass = document.createElement("div");
        grass.className = "grass";
        grass.style.left = x + "px";
        grass.style.top = y + "px";
        grass.innerHTML = '<img src="../../res/img/tall-grass-png-hd-photo-16.png">';
        container.appendChild(grass);

        grassCount++;

        const rabbitWidth = rabbit.clientWidth;
        const rabbitHeight = rabbit.clientHeight;

        const newX = x - (rabbitWidth / 2);
        const newY = y - (rabbitHeight / 2);

        rabbit.style.transform = `translate(${newX}px, ${newY}px)`;

        rabbit.addEventListener("transitionend", function(event) {
          if (event.propertyName === "transform") {
            eating = true;
            rabbit.src = "../../res/img/tuEat.gif"
            rabbit.style.animation = "eat-grass 1s steps(23) infinite";
            setTimeout(function() {
              grassCount--;
              grass.style.display = "none";
              if (grassCount <= 0) {
                eating = false;
                rabbit.style.animation = "none";
                //forbidden.style.display = "block";
                rabbit.src = "../../res/img/tuStatic.png"
              } else {
                eating = false;
                rabbit.src = "../../res/img/tuStatic.png"
              }
            }, 1000);
          }
        }, { once: true });
      }
    });
  }