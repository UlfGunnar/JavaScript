function calcular() {
    var tab = document.getElementById('seltab')
    var num = document.getElementById('txtn')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1;c <= 10;c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            tab.value = `tab${c}`
            tab.appendChild(item)
        }
    }
   
}