let guarda = [] // Mantém os números já adicionados

function add() {
    var num = document.getElementById('num')
    var lista = document.getElementById('lista')

    if (num.value.length == 0) {
        alert('Por favor, preencha com um número!')
    } else {
        let n = Number(num.value)

        if (n < 1 || n > 100) {
            alert('Número fora do intervalo permitido (1 a 100)!')
        } else if (guarda.includes(n)) {
            alert('Este número já foi adicionado!')
        } else { 
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            lista.appendChild(item) 
            guarda.push(n) 
            res.innerHTML = ''//esvazia

            num.value = ''  //limpa acaixa de entrada
            num.focus()   // mantem o cursor no input   
        }
    }
}

function fim() { 

    var res = document.getElementById('res')

    if (guarda.length == 0) { // Corrigido para verificar se o array está vazio
        alert('Nenhum número foi adicionado ainda!')
    } else {
        /* --FORMA SIMPLIFICADA MAIOR E MENOR

        let maior = Math.max(...guarda) // Encontra o maior valor no array
        let menor = Math.min(...guarda) // Encontra o menor valor no array

        */

        let maior = guarda[0] // o maior e o menor até o mommento é o 1º
        let menor = guarda[0]
        let soma = 0
        let media = 0 
        for (let pos in guarda){
            soma += guarda[pos] //soma os valores de todas as posições
           
            if (guarda[pos] > maior) {
                maior = guarda[pos]
            if (guarda[pos] < menor)
                menor = guarda[pos]
            }
        }
        media = soma / guarda.length //soma dos valores divido pela qntd de elementos

        res.innerHTML = ''
        res.innerHTML = `<p> Ao todo, temos ${guarda.length} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>` 
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p> A media dos valores foi ${media}</p>`
 
        // += adiciona info sem apagar as info anteriores, não usa =
        r

    }
}
