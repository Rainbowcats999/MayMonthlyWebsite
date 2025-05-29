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
      <div class="card h-100 shadow-sm">
      <div class="card-content">
        <img src="${p.photo}" class="card-img-top" alt="${p.firstName}${p.lastName}">
        <div class="card-body-top text-center">
            <h5 class="card-title mb-1"> ${p.firstName}<br>${p.lastName} 
            </h5>
            <div class="badge badge-position badge-pos-${p.position}">
              <h5 class="text-black">${p.position}</h5>
            </div>
            <p class="small text-muted mb-0">
                Age: ${p.age}
            </p>
            <button class="btn btn-sm btn-primary my-3 show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">Click Here</button>
        </div>
        </div>
    </div>
      `;

      grid.appendChild(col);
    });
  };

  render(players);
});

function transition() {
  //transition animations would go here
  //alert("transition");
  window.location.href = "players.html";
}
