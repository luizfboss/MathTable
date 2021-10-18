function table(){
    var n = document.getElementById('number')
    var tab = document.getElementById('table')
    if(n.value.length == 0){
        window.alert('Error! Try again.')
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