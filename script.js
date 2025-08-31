
  const heartCounter = document.querySelector("nav .flex div:nth-child(1) p");
  const coinCounter = document.querySelector("nav .flex div:nth-child(2) p");
  const copyCounter = document.querySelector("nav .flex div:nth-child(3) p");

  let hearts = 0;
  let coins = 100;
  let copies = 0;

  document.querySelectorAll(".fa-heart").forEach(heart => {
    heart.addEventListener("click", () => {
      hearts++;
      heartCounter.textContent = hearts;
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
    });
  });

  document.querySelectorAll(".btn").forEach(btn => {
    if (btn.innerText.includes("Copy")) {
      btn.addEventListener("click", () => {
        copies++;
        copyCounter.textContent = copies;
      });
    }
    if (btn.innerText.includes("Call")) {
      btn.addEventListener("click", () => {
        if (coins >= 20) {
          coins -= 20;
          coinCounter.textContent = coins;
        } else {
          alert("কয়েন শেষ হয়ে গেছে!");
        }
      });
    }
  });

