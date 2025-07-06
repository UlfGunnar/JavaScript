var res = document.getElementById('res')
var img = document.createElement('img')
img.setAttribute('id', 'foto')


var diario_banana = {
    titulo: 'Diário de um banana',
    autor: 'Jeff Kinney',
    ano: 2007,
    genero: 'Humor',
    disponivel: true,
}

var diario_perdido = {
    titulo: 'O diário perdido',
    autor: 'Alex Hirsch',
    ano: 2020,
    genero: 'Mistério',
    disponivel: true,
}

function mostrar() {
    var livro = document.getElementsByName('radlivro')

    if (livro[0].checked) {
        res.innerHTML = `titulo: ${diario_banana.titulo}</br>
                          autor: ${diario_banana.autor}</br>
                          ano: ${diario_banana.ano}</br>
                          gênero: ${diario_banana.genero}</br>
                          disponivel: ${diario_banana.disponivel? 'Sim' : 'Não'}</p>`
        img.setAttribute('src', 'diario_banana.png')
    
      
        
    } else if (livro[1].checked) {
        res.innerHTML = `titulo: ${diario_perdido.titulo}</br>
                          autor: ${diario_perdido.autor}</br>
                          ano: ${diario_perdido.ano}</br>
                          gênero: ${diario_perdido.genero}</br>
                          disponivel: ${diario_perdido.disponivel? 'Sim' : 'Não'}</p>`
        img.setAttribute('src', 'diario_perdido.png')
    }

    res.appendChild(img)
}

function emprestar() { 
    var livro = document.getElementsByName('radlivro')

    if (livro[0].checked) {
        diario_banana.disponivel = false
        res.innerHTML += `Você pegou o livro ${diario_banana.titulo}!`
    } else {
        diario_perdido.disponivel = false
        res.innerHTML = `Você pegou o livro ${diario_perdido.titulo}!`
    }  
}

function devolver() { 
    var livro = document.getElementsByName('radlivro')

    if (livro[0].checked) {
        diario_banana.disponivel = true
        res.innerHTML = `Você devolveu o livro ${diario_banana.titulo}!`
    } else {
        diario_perdido.disponivel = true
        res.innerHTML = `Você devolveu o livro ${diario_perdido.titulo}!`
    }
}