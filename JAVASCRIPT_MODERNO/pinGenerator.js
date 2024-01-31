// Gerador de senha
function pinGenerator(comprimento) {
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890[]{}`´-=/*<>?!@#$%¨&*()'
  let senha = ''
    for(let contador = 0; contador < comprimento; contador++){
      let aleatorio = Math.floor(Math.random() * caracteres.length)
      senha += caracteres[aleatorio]
    }
    console.log(senha)
}

pinGenerator(50)