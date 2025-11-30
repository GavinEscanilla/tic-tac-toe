const win_conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const tile = document.querySelectorAll(".tile");
const stat = document.getElementById("status")
const board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
function checkWin(){
  for(let condition of win_conditions){
    const [a,b,c] = condition;
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      return board[a];
    }
  }
  return null
}
tile.forEach((T, index) =>{
  T.textContent = board[index];
})
tile.forEach((T, index) => {
  T.addEventListener("click", () => {
    if(board[index] === ""){
      board[index] = player;
      T.textContent = player;
      const win = checkWin();
      if(win){
        stat.textContent = player + " wins!";
        return
      }
      if (!board.includes("")) {
        stat.textContent = "Draw!";
        return;
      }
      player = player === "X" ? "O" : "X";
      stat.textContent = player + "'s turn";
    
    }
  })
})
 
console.log(board);

