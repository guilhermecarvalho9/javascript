function tabuada() {
    let tnum = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')


    if(tnum.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        let num = Number(tnum.value)
        tab.innerHTML = '' //Apaga registros anteriores na tabela
        for(let c = 1; c <= 10; c+=1) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${c * num}`
            tab.appendChild(item)
        }
    }

    
}