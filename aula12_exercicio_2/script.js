function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoFormulario = document.getElementById('txtano')
    var result = document.querySelector('div#result')

    if (anoFormulario.value.length == 0 || anoFormulario.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sexoFormulario = document.getElementsByName('radsex')
        var idade = ano - Number(anoFormulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.height = "400"
        img.width = "320" 
        img.setAttribute('id', 'foto')
        if (sexoFormulario[0].checked) {
            genero = 'Masculino'
            
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'Menino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'Garoto.png')
            }else if(idade < 50){
                img.setAttribute('src', 'Homem.png')
            }else {
                img.setAttribute('src', 'Idoso.png')
            }
        }else if (sexoFormulario[1].checked) {
            genero = 'Feminino'

            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'Menina.png')
            }else if (idade < 21){
                img.setAttribute('src', 'Garota.png')
            }else if(idade < 50){
                img.setAttribute('src', 'Mulher.png')
            }else {
                img.setAttribute('src', 'Idosa.png')
            }
        }
    result.style.textAlign = 'center'
    result.innerHTML = `Gênero: ${genero} - Idade: ${idade} anos`
    result.appendChild(img)
    }
}   