// track user color input
let userColor
function changeColor(){
  let colorPicker= document.getElementById("colorPicker")
userColor= colorPicker.value;
colorPicker.value= userColor;

}
function colorPicker(){
  let color= document.getElementById("colorPicker").value;
  console.log(color)
  
}
// create the grid
function tableOutPut(){

  // prevenet submit form default
  event.preventDefault();

  // select the canvas
  let table= document.getElementById("pixelCanvas");

  // cteate a table body
  let tabBody = document.createElement("TBODY")

  // APPEND TO TABLE
  table.appendChild(tabBody)

  //select user hight(row number)
  let hight = document.getElementById("inputHeight").value;

  // create rows equal to user hight
  for (i=1; i<= hight; i++ ){
    let row= document.createElement("TR");
    row.setAttribute("id", "row");
    tabBody.appendChild(row)

  //select user width (column number)
  let width=document.getElementById("inputWidth").value;
  for (j=1; j<=width; j++){
    let column= document.createElement("TD");
    column.setAttribute("id", "column");
    row.appendChild(column)
    changeColor();
    column.addEventListener("click", function(e){
    column.style.backgroundColor = userColor;
})
  column.addEventListener("dblclick", function(e){
  column.style.backgroundColor = "";
})
document.getElementById("subButt").addEventListener("click", function(e){
    column.style.backgroundColor = "";
})

}

}

}
