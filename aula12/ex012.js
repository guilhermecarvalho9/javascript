var hora = 18
if (hora >= 0 && hora <= 24) {
    console.log(`São ${hora} horas`)
    if (hora <= 12) {
        console.log('Bom dia!')
    } else if (hora < 18) {
        console.log('Boa tarde!')
    } else {
        console.log('Boa noite!')
    }
} else {
    console.log('Valor inválido para hora')
}