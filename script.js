document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  const render = (list) => {
    grid.innerHTML = "";
  };

  render(players);
});
