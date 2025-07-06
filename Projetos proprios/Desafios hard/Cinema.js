var res = document.getElementById('res')
var reservado = ['a']

for (var c = 1; c <= 30; c++) {
  res.innerHTML += `C${c}[  ] `
}

function reservar() {
    var num = Number(document.getElementById('txtassento').value)
    reservado.push(num)
    res.innerHTML = ''
    var cont = 1

    for (var c = 1; c <= 30; c++) {
        if (c == 0) {
            continue
        } else if (reservado.indexOf(c) == -1) {
            res.innerHTML += `C${c}[  ] `
        } else{
            res.innerHTML += `C${c}[X] `
        }
    }

}