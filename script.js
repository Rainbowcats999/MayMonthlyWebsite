document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  const render = (list) => {
    grid.innerHTML = "";

    list.forEach((p) => {
      const col = document.createElement("div");

      col.className = "col-6 col-lg-2";

      col.innerHTML = "";
    });
  };

  render(players);
});
