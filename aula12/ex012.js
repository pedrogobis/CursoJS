/*pegar a hora do pc*/
var agora = new Date()
/*var hr = 12*/
var hr = agora.getHours()

console.log(`Agora são exatamente ${hr} horas.`)

if (hr < 12){
    console.log('Bom dia vadia')
    
}else if(hr> 12 && hr < 18){
    console.log('Boa tarde maroca')
}else if (hr > 18){
    console.log('Boa noite XAVASCA')
}

/*só ta com uma falha de que se for madrugada ele fala bom dia*/