//Em JS, o Arrya é um Object e um Object é um Object (são da mesma classe)

let amigo = {nome: 'Mandré' ,
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p


}}
//console.log(typeof amigo) mostra o tipo da variavel

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)