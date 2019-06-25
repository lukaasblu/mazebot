start_app();

function displayMaze(mazeElement, map) {
  for (let i = 0; i < map.length; i++) {
    let row = "";
    for (let j = 0; j < map[i].length; j++) {
      row += map[i][j];
    }
    mazeElement.appendChild(createMazeRowElement(row));
  }
}

function createMazeRowElement(row) {
  let mazeRow = document.createElement("pre");
  mazeRow.className = "maze-row";
  mazeRow.innerHTML = row;
  return mazeRow;
}

function getMaze() {
  getJson("/mazebot/random?maxSize=25").then(res => {

    // @TODO
    // The instruction below shouldn't be written here : 
    // it's not correct to set the click event listener on each api call !
    document.querySelector("#change-maze-btn").addEventListener("click", getMaze);

    const maze = document.getElementById("maze");
    maze.innerHTML = '';
    
    const name = document.getElementById("name");
    name.innerHTML = res.name;

    displayMaze(maze, res.map);
  });
}

function start_app() {
  getMaze();
}
