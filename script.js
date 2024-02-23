const btn = document.querySelector(".btn");
const table = document.querySelector("#sampleTable");
let rowNum = 3;

function insert_Row() {
  let colNum = 1;

  const row = document.createElement("tr");

  const col1 = document.createElement("td");
  col1.textContent = `Row${rowNum} cell${colNum}`;
  row.appendChild(col1);
  colNum++;

  const col2 = document.createElement("td");
  col2.textContent = `Row${rowNum} cell${colNum}`;
  row.appendChild(col2);

  rowNum++;
  colNum = 1;

  table.appendChild(row);

  
  btn.removeEventListener("click", insert_Row);
}


btn.addEventListener("click", insert_Row);
