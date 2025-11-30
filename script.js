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
const container = document.body;
function check(arr, win){
   
   for(let i = 0; i < arr.length; i++){
    let [a,b,c] = win[i];
    if( arr[a] === arr[b] && arr[b] === arr[c] && arr[c] === arr[a]){
        return true
    }
   }
}
const P1 = "O";
const P2 = "X";
let player = P1;
const tile = document.querySelectorAll(".tile");
tile.forEach((i) => (i.textContent = " "));
const board =  Array.from({length:9}).fill(" ");



console.log(board);
