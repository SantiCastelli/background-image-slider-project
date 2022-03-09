  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  

  let derecha = document.querySelector(".btn-right");
  let izquierda = document.querySelector(".btn-left");
  let imagenFondo = document.querySelector("#fondo")

  

  izquierda.addEventListener("click", function(){
    console.log("muevo a izquierda");
    derecha.style.backgroundcolor = "black";
    
  })

  derecha.addEventListener("click", function(){
    console.log("muevo a derecha");
  } )