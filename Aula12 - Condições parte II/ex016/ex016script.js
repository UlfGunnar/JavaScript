function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Dado inválidos! Por favor tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `${idade}`
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){   
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_homem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_homem.png')
            } else {
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_mulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_mulher.png')
            } else {
                img.setAttribute('src', 'idoso_mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}