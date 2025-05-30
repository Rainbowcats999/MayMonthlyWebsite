document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  grid.addEventListener("click", function (e) {
    if (e.target.classList.contains("show-info-btn")) {
      const index = e.target.getAttribute("data-player-index");
      const player = players[index];
      showPlayerModal(player);
    }
  });

  function showPlayerModal(player) {
    document.getElementById("modalPhoto").src = player.photo;
    document.getElementById(
      "modalName"
    ).textContent = `${player.firstName} ${player.lastName}`;
    document.getElementById("modalPosition").textContent = player.position;
    document.getElementById("modalAge").textContent = player.age;
  }

  const render = (list) => {
    grid.innerHTML = "";

    list.forEach((p, index) => {
      const col = document.createElement("div");

      col.className =
        "col-6 col-md-3 col-xl-2 d-flex justify-content-center align-items-center";

      col.innerHTML = `
      <div class="card h-100 shadow-sm status-${p.status}">
      <div class="card-content">
        <img src="${p.photo}" class="card-img-top" alt="${p.firstName}${
        p.lastName
      }">
        <div class="card-body-top text-center">
            <h5 class="card-title mb-1"> ${p.firstName}<br>${p.lastName} 
            </h5>
            <div class="badge badge-position">
              <h5 class="text-black">${p.position}</h5>
            </div>
            <p class="small text-muted mb-0">
                Age: ${p.age}
            </p>
 <img src="imgs/puck.avif" class="${p.firstName}${p.lastName.substring(
        1
      )}" data-bs-toggle="modal" data-bs-target="#playerModal" style="cursor:pointer;">
            </div>
      </div>
    </div>
      `;

      grid.appendChild(col);
      document
        .querySelector(`.${p.firstName}${p.lastName.substring(1)}`)
        .addEventListener("click", () => {
          document.querySelector(
            ".player-name"
          ).textContent = `${p.firstName} ${p.lastName}`;
          document.querySelector(".player-age").textContent = `Age: ${p.age}`;
          document.querySelector(
            ".player-status"
          ).textContent = `Status: ${p.status}`;
          document.querySelector(
            ".player-debut"
          ).textContent = `NHL debut: ${p.debut}`;
        });
    });
  };

  render(players);
});

function transition() {
  //transition animations would go here
  //alert("transition");
  window.location.href = "players.html";
}
