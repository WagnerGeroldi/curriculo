function calcularAnos() {

const dataAtual = new Date(); // Data de hoje
const dataInicial = new Date('2007-07-01'); // aaaa-mm-dd
const diferencaDatas = Math.abs(dataAtual.getTime() - dataInicial.getTime()); // Subtrai uma data pela outra
const calculo = (diferencaDatas / (1000 * 86400 * 365 ));
const html = `(${calculo.toFixed(1)} anos)`
return html

}
const valor = document.querySelector('.anos-trabalho')
valor.innerHTML = calcularAnos()

// calcular idade
function calcularIdade() {
    const dataAtual = new Date(); // Data de hoje
    const mes = dataAtual.getMonth()
    const dataNascimento = new Date('1989-12-07'); // aaaa-mm-dd
    const diferencaDatas = Math.abs(dataAtual.getTime() - dataNascimento.getTime()); // Subtrai uma data pela outra
    
    if (mes < 11) {
       const calculo = (diferencaDatas / (1000 * 86400 * 365 ) - 1);
       const resultado = ` (${calculo.toFixed(0)} anos)`
        return resultado
    }
    else {
        calculo = (diferencaDatas / (1000 * 86400 * 365 ))
        const resultado = ` (${calculo.toFixed(0)} anos)`
        return resultado
    }
    
    }
    const inserirIdade = document.querySelector('.idade')
    inserirIdade.innerHTML = calcularIdade()


    //exibir saudação
    function verificarHorario() {
        const horarioDia = '12'
        const horarioNoite = '19'
        const hora = new Date()
        if (hora.getHours() >= horarioNoite) {
           saudacao = 'Boa Noite'
        }
        else if (hora.getHours() >= horarioDia) {
            saudacao =  'Boa Tarde'
        }
        else {
            saudacao =  'Bom Dia'
        }
        return saudacao
    }
    const inserirSaudacao = document.querySelector('.saudacao')
    inserirSaudacao.innerHTML = verificarHorario()


