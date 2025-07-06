var mensagens = []; var n_reservadas = []; //Armazena as mensagens e números já digitados
var res = document.getElementById('res')
var maior = 0; var menor = 0; var soma = 0; var cont = 0;
var lista = document.getElementById('txtlista')
var img = document.createElement('img')
img.setAttribute('id', 'foto')
img.setAttribute('src', 'Gato_joinha.png')


function adicionar() {
    var num = document.getElementById('txtn')
    var n = Number(num.value)

    if (num.value.length == 0) {
        alert('Digite algum valor!')
    } else if (n_reservadas.indexOf(n) != -1) {
        alert('Valor já adicionado! Tente outro.')
    } else if (n > 100 || n < 1) {
        alert('Digite apenas valores entre 1 a 100!')
    } else {
        res.innerHTML = ''
        soma += n 
        cont++

        if (n > maior) {
            maior = n
            if (mensagens.length == 0) {
                menor = maior
            }
        } else if (n < menor) {
            menor = n
        }

        n_reservadas.push(n)
        var mensagem  = `Valor ${n} Adicionado` //Cria a msg
        mensagens.push(mensagem) //adiciona no array
        lista.innerHTML = '' //Limpa para ser add outra 

        mensagens.forEach(function(msg) { //Função para mostrar a msg no select 
            var item = document.createElement('option')
            item.text = msg
            lista.appendChild(item)
            
            });
        }
}

function finalizar(){
    if (mensagens.length == 0) {
        alert('Adicione pelo menos um valor!')
    } else {
        res.innerHTML = ''
        res.innerHTML += `Foram adicionados ${mensagens.length} valores</p>`
        res.innerHTML += `O maior valor digitado foi o ${maior} e o menor foi o ${menor}</p>`
        res.innerHTML += `A soma de todos os valores é igual a ${soma}</p>`
        res.innerHTML += `A média dos valores é igual a ${(soma/cont).toFixed(2)}</p>`
        res.appendChild(img)
    }
}

function limpar() {
    soma = 0
    cont = 0
    maior = 0
    menor = 0
    n_reservadas = []
    res.innerHTML = ''
    mensagens = []
    lista.innerHTML = '<option>Adicione números!</option>'
}