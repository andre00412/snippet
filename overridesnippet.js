
  
var table = document.getElementsByClassName("centerTable")[4]; 
const colIndex1 = 2;
const colIndex2 = 4;
const colIndex3 = 0;
let allValuesEqual = true;

for (let i = 1; i < table.rows.length -3; i++) {
  const cell1 = table.rows[i].cells[colIndex1];
  const cell2 = table.rows[i].cells[colIndex2];
  const cell3 = table.rows[i].cells[colIndex3];
  var pCell1 = parseInt(cell1.innerText);
  var pCell2 = parseInt(cell2.innerText);
        console.log(pCell1);
        console.log(pCell2);
  if(pCell1 > pCell2)
  {
    cell3.style.backgroundColor = "red";
  }
  else{
    cell3.style.backgroundColor = "white";
  }

  }

