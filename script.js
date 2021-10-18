function tabuada(){
    var n = document.getElementById('numero')
    var tab = document.getElementById('tabuada')
    if(n.value.length == 0){
        window.alert('Erro! Tente novamente.')
    } else{
        var num = Number(n.value)
        var c = 1
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}