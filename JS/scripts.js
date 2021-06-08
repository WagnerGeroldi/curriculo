function idade() {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let nascimentoWagner = 1989;
    let idadeWagner = anoAtual - nascimentoWagner;
    if (mesAtual < 11) {
        return `${--idadeWagner} anos`
    }else {
        return idadeWagner + ' anos'
    }
}
document.getElementById('idade').append(idade())
