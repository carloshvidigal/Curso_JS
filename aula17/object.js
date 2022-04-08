let amigo = {nome: "José",
sexo: 'M',
peso: 85.4,
engordar(p=0){                 //p=0 significa que caso o valor não seja passado por parâmetro,o valor assumido
    this.peso += p                    //  será igual a 0           
    console.log('Engordou')

}}

console.log(amigo)

`${amigo.nome} pesava ${amigo.peso} Kg`
amigo.engordar(2)
`Agora, ${amigo.nome} pesa ${amigo.peso} Kg`