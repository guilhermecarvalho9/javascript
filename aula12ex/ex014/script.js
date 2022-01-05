function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora>=0 && hora <= 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#be9a3a'
    } else if (hora>12 && hora<18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#fcb194'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#172941'
    }
 
}