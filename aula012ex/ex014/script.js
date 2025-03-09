function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = 10 //data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#db9f8c'
} else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#fe7541'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#073a7b'
}

}