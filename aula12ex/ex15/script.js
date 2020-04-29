function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
           genero = 'Homem'
            if (idade >= 0 && idade < 10) {
            // criança
                img.setAttribute('src', 'bebeh.png')
            }   
            else if (idade < 21) {
            // jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50){
            // 
            img.setAttribute('src', 'adultoh.png')
            } else {
            // idoso
            img.setAttribute('src', 'idosoh.png')
            }
            } else if (fsex[1].checked){
            genero = 'Mulher'
            
        if (idade >= 0 && idade <10) {
            // criança
            img.setAttribute('src', 'bebem.png')
        }   else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'jovemm.png')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'adultom.png')
        } else {
            // idoso
            img.setAttribute('src', 'idosom.png')
        }
    }   
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }

}