// Com function normal.
setTimeout(function sla() {
  console.log('Bom dia')
}, 3000)

// Com arrow function.
setTimeout(() => {console.log("Apareci")}, 5000)

// Com função de fora.
function sabrina() {
  console.log('Eu gosto de maquiagem')
}

setTimeout(sabrina, 3000)