alert('olá')

function carregar() {

var msg = document.getElementById('msg')
var foto = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 16

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    foto.src = 'manha1.png'
    document.body.style.background = '#e2cd9f'
}
else if (hora >= 12 && hora <= 18) {
    // BOM TARDE!
    foto.src ='tarde1.png'
    document.body.style.background = '#b9846f'
}
else {
    // BOA NOITE!
    foto.src = 'noite1.png'
    document.body.style.background = '#515154'
}

}