
function verificar() {
    var anoAtual = new Date()
    var anoHoje = anoAtual.getFullYear()
    var tano = window.document.getElementById('txtano')//Seletor do conteúdo do input number
    var ano = Number(tano.value) //Formatando para número o valor do input
    var txtsexo = window.document.getElementById('')
    var res = window.document.querySelector('div#res')

    if (tano.value.length == 0 || ano > anoHoje) {
        window.alert('[ERRO] Verifique o valor digitado')
    } else {
        var tsex = window.document.getElementsByName('radsex')
        var idade = anoHoje - ano //Cálculo da idade
        var genero = ''
        var img = document.createElement('img') //Inserção de imagem
        img.setAttribute('id', 'foto') //Criação de id para a imagem 'img'

        if (tsex[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 18) {
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if(idade < 50) { 
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }


        } else if (tsex[1].checked) {
            genero = 'Mulher'
            if(idade > 0 && idade <= 10) {
                img.setAttribute('src', 'foto-bebe-f.png')//Criança
            } else if(idade < 18) {
                img.setAttribute('src', 'foto-crianca-f.png') //Jovem
            } else if(idade < 50) { 
                img.setAttribute('src', 'foto-adulto-f.png')//Adulto
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')//Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}