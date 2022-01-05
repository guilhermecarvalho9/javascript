function contar() {
    var tinicio = window.document.getElementById('txtinicio')
    var tfim = window.document.getElementById('txtfim')
    var tpasso = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    
    if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        window.alert('[ERRO] Dados incompletos!')
        res.innerHTML = 'Impossível contar'
    } else {
        i = Number (tinicio.value)
        f = Number (tfim.value)
        p = Number (tpasso.value)
        if(p <= 0) {
            window.alert('Impossível calcular. Considerando PASSO 1')
            p = 1
        }
        res.innerHTML = '<p>Contando...<br></p>'
           
        if(i < f) {
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`}
        } else {
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
        }
    }
}