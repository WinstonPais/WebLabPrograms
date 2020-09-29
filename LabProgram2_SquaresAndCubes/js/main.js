const confirmation = confirm("Do you want to show the Table");
if(confirmation){
  const lowerRange = parseInt(prompt("Enter Lower Range"));
  const upperRange = parseInt(prompt("Enter Upper Range"));
  document.getElementsByTagName("table")[0].innerHTML = '<tr><td>Number</td><td>Square</td><td>Cube</td></tr>';
  for(let i=lowerRange;i<upperRange+1;i++){
    document.getElementsByTagName("table")[0].innerHTML += '<tr><td>'+i+'</td><td>'+i*i+'</td><td>'+i*i*i+'</td></tr>';
  }
}
else{
  document.getElementsByTagName("table")[0].innerHTML = 'Have a Good Day';
}
