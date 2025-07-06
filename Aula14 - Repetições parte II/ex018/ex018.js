function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length <= 0 || passo.value == 0) {
        res.innerHTML = `Impossivel de contar \u{1F61F}`
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando:</br>' 
        //Contagem crescente
        if (i <= f) {
            while (i <= f) {
                res.innerHTML += `${i}\u{1F449}`
                i += p
            }
        //Contagem decrescente
        } else {
            while (i >= f) {
                res.innerHTML += `${i}...`
                i -= p
            }   
        }
        res.innerHTML += `Fim!\u{1F3C1}`
    }
}
function limpar() {
    res.innerHTML = ''
}