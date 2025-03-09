function gerar () {

    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if (num.value.length == 0) { //se nao preenchar o input ele nao roda
        alert('Por favor, preencha com um número!')
    } else {
        let n = Number(num.value) //converte (num) para número
        let c = 1 //contador
        tab.innerHTML = '' // isso aqui vai limpar a tabela apos digitar o próximom número
        
        while (c <= 10) {
            let item = document.createElement('option') //cria elementos (option) no <select>
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // os options precisam ter values (faz mais diferença como no PHP)
            tab.appendChild(item) //adiciona o elelmento filho na tabuada
            c++ // conta 1 , 2 , 3 e sucessivamen
        }

    }

    


}