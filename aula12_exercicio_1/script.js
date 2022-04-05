function carregar(){

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        imagem.src = 'imagemManha.png'
        document.body.style.background = '#71C2FA'
    }else if(hora >= 12 && hora < 18){
        imagem.src = 'imagemTarde.png'
        document.body.style.background = '#F3AE6A'
    }else{
        imagem.src = 'imagemNoite.png'
        document.body.style.background = '#14435C'
    }
}
