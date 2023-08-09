function tabuada(){
    var fnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (fnum.value.length == 0){
        alert('Digite um número!')
    }
    else {
        var num = Number(fnum.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}