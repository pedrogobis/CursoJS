var res = document.querySelector('#res');
var estacao // definiu uma estação


// meu metodo ia ser muito diferente, então descidi ver o codigo dele.
function clicou(){
    mesen = prompt('Digite um mês do ano (ex: Abril)')
  

    // ele fez um switch, porém ele juntou 3 casos para mesma resposta, muito sabio.
    switch (mesen.toUpperCase()){ // como n da pra saber como o usuario irá digitar a entrada ele converteu tudo para uppercase para n dar erro, muito sabio.
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'VERÃO'
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'OUTONO'
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break;
        default:
            estacao = 'INDEFINIDA'
            break;
    }

    res.innerHTML =`Em ${mesen} a estação do ano no brasil é ${estacao}`
}