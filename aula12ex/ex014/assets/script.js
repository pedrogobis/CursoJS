function carregar() {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('#imgprin')// precisa pegar exatamente a tag que a img está inserida
    var data = new Date()
    var hora = data.getHours()
    //var hora = 5;

    msg.innerHTML = `Agora são ${hora} horas`


    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/fotomanhamini.PNG'
        document.body.style.background = '#7A7474'
    }else if(hora >= 12  && hora < 18) {
        //boa tarde
        img.src = 'img/fototardemini.PNG'
        document.body.style.background = '#9DA9B9'
    }else{
        //boa noite
        img.src = 'img/fotonoitemini.PNG'
        document.body.style.background = '#3A3240'

    }
}