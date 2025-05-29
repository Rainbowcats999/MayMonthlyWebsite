document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  const render = (list) => {
    grid.innerHTML = "";

    list.forEach((p) => {
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

            </div>
            <p class="small text-muted mb-0">
                Age${p.age}
            </p>
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
