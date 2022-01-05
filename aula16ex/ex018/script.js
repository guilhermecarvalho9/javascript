let tnum = window.document.getElementById('txtnum')
let caixaResultado = window.document.getElementById('cxres')
let analise = window.document.getElementById('analise')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(tnum.value) && !inLista(tnum.value, valores)) {
        valores.push(Number (tnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${tnum.value} adicionado`
        caixaResultado.appendChild(item)
        
    } else {
       window.alert('Valor inválido ou já adicionado, digite outro valor')
    }
    tnum.value = ''
    tnum.focus()
    analise.innerHTML = ''
}

function finalizar() {
    if(caixaResultado.length == 0) {
        window.alert('Impossível finalizar, adicione valores')
    } else {
        let soma = 0
        let media = 0
        let maior = valores[0]  
        let menor = valores[0]
        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        analise.innerHTML = `<p>O vetor tem ${valores.length} valores</p>`
        analise.innerHTML += `<p>A soma dos componentes do vetor é ${soma}</p>`
        analise.innerHTML += `<p>A média dos componentes do vetor é ${media}</p>`
        analise.innerHTML += `<p>O maior valor do vetor é ${maior}</p>`
        analise.innerHTML += `<p>O menor valor do vetor é ${menor}</p>`
        analise.innerHTML += `<p>${valores}</p>`
    }
    
} 