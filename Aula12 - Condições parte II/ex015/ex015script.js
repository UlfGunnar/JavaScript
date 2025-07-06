var res = document.getElementById('res')

function carregar(){
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    res.innerHTML = `Agora são ${hora} horas.</br>`

    if (hora >= 5 && hora <= 12) {
        document.body.style.background = '#B0AE09'
        img.src = 'manha.png'
    } else if (hora >= 13 && hora <= 19) {
        document.body.style.background = '#E07812'
        img.src = 'tarde.png'
    } else {
        document.body.style.background = '#24276B'
        img.src = 'noite.png'
    }
}

