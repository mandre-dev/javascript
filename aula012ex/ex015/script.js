function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando um elemento
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { 
                //kid
                img.setAttribute('src', 'homem bebe.png')
            } else if  (idade < 21) {
                //jovem 
                img.setAttribute('src', 'homem jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'veio.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

         if (idade >= 0 && idade < 10) { 
            //kid
            img.setAttribute('src', 'mulher bebe.png')
        } else if  (idade < 21) {
            //jovem 
            img.setAttribute('src', 'mulher jovem.png')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'mulher adulta.png')
        } else {
            // idoso
            img.setAttribute('src', 'veia.png')
        }
    }
        res.style.textAlign =' center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}