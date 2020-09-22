document.getElementsByTagName("table")[0].innerHTML = '<tr><td>Number</td><td>Square</td><td>Cube</td></tr>';
for(let i=1;i<11;i++){
  document.getElementsByTagName("table")[0].innerHTML += '<tr><td>'+i+'</td><td>'+i*i+'</td><td>'+i*i*i+'</td></tr>';
}
