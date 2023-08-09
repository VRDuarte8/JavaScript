function contar(){
    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    var fpas = document.getElementById('txtpas')
    if(fini.value.length == 0 || ffim.value.length == 0 || fpas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        var ini = Number(fini.value)
        var fim = Number(ffim.value)
        var pas = Number(fpas.value)
        if(pas == 0){
            alert('Passo Inválido! Considerando PASSO 1')
            pas = 1
        }
        res.innerHTML = 'Contando: <br>'
        if(fim > ini){
            for(var c = ini;c <= fim;c += pas){
                res.innerHTML += `${c} &#x1F449`
            }
        } else {
            for(var c = ini;c >= fim;c -= pas){
                res.innerHTML += `${c} &#x1F449`
            }
        }
        
        res.innerHTML += ' &#x1F3C1 '
    }
}