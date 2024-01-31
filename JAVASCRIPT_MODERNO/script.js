// 1 - var, let e const.
// VAR - Não resppeita o escopo.

var x = 10
var y = 15

if(y > 10) {
  var x = 5
  console.log(x) // R: 5
}
console.log(x) // R: 5

// LET - Respeita o escopo.
let a = 10
let b = 15

if(b > 10) {
  let a = 5
  console.log(a) // R: 5
}
console.log(a) // R: 10

let i = 100

for(let i = 0; i < 5; i++) {
  console.log(i)
}

// CONST - É imutável.
function logName() {
  const name = 'Guiuiba'
  console.log(name)
}

const name = 'Raul'
console.log(name) // R: Raul
logName() // R: Guiguiba

name = 'test' // R: Erro, pois é imutável.


// Aula 2 - Arrow Function
// Forma usada antigamente.
const sum = function(a, b) {
  return a + b
}

const arrowSum = (a, b) => a + b // Bem mais efciente.

console.log(sum(5,5))
console.log(arrowSum(5,5))

// Se o código for mais complexo é preciso colocar os colchetes.
const greeting = (name) => {
  if(name) {
    return `Olá ${name}!`
  } else {
    return 'Olá!'
  }
}

console.log(greeting('Guiguiba'))
console.log(greeting())

// Sem console log.
const testeArrow = () => console.log('testou!')
testeArrow()

// Usando This.
const user = {
  name: 'Theo',
  sayUserName() {
    var self = this
    setTimeout(function() {
      console.log(self)
      console.log(`Username: ${self.name}`)
    }, 500)
  },
  sayUserNameArrow() {
    setTimeout(() => { // Aqui, o this não pprecisa ser armazenado em um var.
      console.log(this)
      console.log(`Username: ${this.name}`)
    }, 700)
  }
}

user.sayUserName()
user.sayUserNameArrow()




// Aula 3 - Filter
const array = [1, 2, 3, 4, 5]
const highNumbers = array.filter((n) => {
  if(n >= 3) {
    return n
  }
})

console.log(highNumbers)

const users = [
  {name: "Guiguiba", available: true},
  {name: "Sabrina", available: true},
  {name: "Sidney", available: false},
  {name: "Tatiane", available: false}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)



// Aula 4 - Map
const products = [
  {name: 'Camisa', price: 10.99, category: 'Roupas'},
  {name: 'Chaleira elétrica', price: 49.99, category: 'Eletro'},
  {name: 'Fogão', price:400, category: 'Eletro'},
  {name: 'Calça jeans', price: 50.99, category: 'Roupas'}
]
products.map((product) => {
  if(product.category === 'Roupas') {
    product.onSale = true // product.<novo campo>
  }
})

console.log(products)











// Aula 5 - Template Literals
const userName = 'Guiguiba'
const age = 18

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)
console.log('O nome do usuário é ' + userName + ' e ele tem ' + age + ' anos')










// Aula 6 - Destructuring
// Com arrays
const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f2);

// Com objetos
const productDetails = {
  name: "Mouse",
  price: 200,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color: productColor,
} = productDetails;

console.log(
  `O nome do produto é: ${productName}, custa R$${price}, pertence à categoria ${productCategory} e é da cor: ${productColor}`
);












// Aula 7 - Spread operator | Colocando arrays dentro de um único array. Vale para objetos também.
// Com arrays.
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3) // [1, 2, 3, 4, 5, 6]

// Adicionando com números já no vetor.
const a4 = [0, ...a1, 4]
console.log(a4) // [0, 1, 2, 3, 4]

// Com objetos.
const carName = {name: 'Astra'}
const carBrand = {brand: 'Chevrolet'}
const otherInfos = {Km: 1200, price: 20000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)// {...carName, ...carBrand, ...otherInfos, wheels: 4}



// 8 - Classe
class Product {
  constructor(name, price) {
    this.name = "Nome do produto: " + name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product('Camisa gola V', 20)
console.log(shirt.name) // Nome do produto: Camisa gola V
console.log(shirt.productWithDiscount(10)) // 18

const tenis = new Product('Adidas Forum low', 900)

console.log(tenis.productWithDiscount(20))








// 9 - Herança
class ProductWithAtributes extends Product {
  constructor(name, price, colors) {
    super(name, price)// Já reutilizando da classe herada.
    this.colors = colors
  }

  showColors() {
    console.log('As cores são: ')
    this.colors.forEach((color) => { //Looping mais simples.
      console.log(color)
    });
  }
}

const hat = new ProductWithAtributes('Chapéu', 59.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.showColors())