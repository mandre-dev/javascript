function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value) // Convertendo para números
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            alert('Passo Inválido! Considerando passo 1')
            p = 1
        }

        if (p <= 0) {  // Verificação para evitar passo zero ou negativo
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) { // CONTAGEM CRESCENTE
            for (var c = i; c <= f; c += p) { // Adicionadas as chaves corretamente
                res.innerHTML += ` ${c} 👉`
            }
        } else { // CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} 👉`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
