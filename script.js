
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

  document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.getElementById("history-list");
  const clearBtn = document.getElementById("clear-history");

  document.body.addEventListener("click", (e) => {
    let btn = e.target.closest("button");
    if (!btn) return;

    const isCallBtn = btn.classList.contains("bg-green-500")
                       || /\bcall\b/i.test(btn.textContent)
                       || btn.querySelector(".fa-phone");
    if (!isCallBtn) return;
    e.preventDefault();

    // climb ancestors until we find an element that contains an <h1>
    let card = btn;
    while (card && card !== document.body && !card.querySelector("h1")) {
      card = card.parentElement;
    }
    if (!card || card === document.body) return;

    const serviceName = card.querySelector("h1")?.textContent.trim() || "Unknown";
    let serviceNumber = card.querySelector("p.font-bold")?.textContent.trim() || "";
    if (!serviceNumber) {
      const ps = Array.from(card.querySelectorAll("p"));
      const pWithNum = ps.find(p => /\d/.test(p.textContent));
      serviceNumber = pWithNum ? pWithNum.textContent.trim() : "";
    }

    const timestamp = new Date().toLocaleTimeString();

    // Create a styled card-like list item
    const li = document.createElement("li");
    li.className = "bg-gray-100 rounded-xl p-3 my-2 flex justify-between items-center shadow-md";

    const leftDiv = document.createElement("div");
    leftDiv.className = "flex flex-col";
    const nameP = document.createElement("p");
    nameP.className = "font-semibold text-gray-800";
    nameP.textContent = serviceName;
    const numberP = document.createElement("p");
    numberP.className = "text-gray-600";
    numberP.textContent = serviceNumber;

    leftDiv.appendChild(nameP);
    leftDiv.appendChild(numberP);

    const rightDiv = document.createElement("div");
    rightDiv.className = "text-gray-500 text-sm";
    rightDiv.textContent = timestamp;

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);

    historyList.prepend(li);
  });

  clearBtn.addEventListener("click", () => historyList.innerHTML = "");
});



 
   



