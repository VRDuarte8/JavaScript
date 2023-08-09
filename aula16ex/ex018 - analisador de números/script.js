let numeros = []

function adicionar(){
    let resultado = document.getElementById('res')
    resultado.innerHTML = ''
    let fnum = document.getElementById('txtnum')
    let num = Number(fnum.value)
    let lista = document.getElementById('inumeros')
    if (numeros.indexOf(num) != -1 || num < 1 || num > 100 || fnum.value.length == 0){
        alert('Valor inválido ou já encontrado na lista')
    } else {
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }
    fnum.value = ''
    fnum.focus()
}

function finalizar(){
    let resultado = document.getElementById('res')
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    let media = 0
    for (let pos in numeros){
        if(numeros[pos] > maior){
            maior = numeros[pos]
        }
        if(numeros[pos] < menor){
            menor = numeros[pos]
        }
        soma += numeros[pos]
    }
    media = soma / numeros.length
    resultado.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media}.</p>`
}