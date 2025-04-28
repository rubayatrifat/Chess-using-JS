// Selecting the chess board container
const chessBoard = document.querySelector('.chess-board');

// Generating 64 chess boxes with alternating colors
for (let i = 0; i < 64; i++) {
  // Create a single box (cell)
  const box = document.createElement("div");
  box.classList.add("chess-box"); // Adding base class

  // Determine box color (black/white) based on row and column
  const row = Math.floor(i / 8);
  const isEvenRow = row % 2 === 0;
  const isEvenCol = i % 2 === 0;

  if (isEvenRow) {
    // Even row → black at even index, white at odd
    isEvenCol ? box.classList.add('black') : box.classList.add('white');
  } else {
    // Odd row → white at even index, black at odd
    isEvenCol ? box.classList.add('white') : box.classList.add('black');
  }

  // Append the box to the board
  chessBoard.appendChild(box);
}
