const form = document.querySelector('#formulario-valores')
let formValido = false;

function validacaoValores(A, B) {
    return (+B) > (+A);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var valorCampoA = document.getElementById('campoA');
    var valorCampoB = document.getElementById('campoB');
    formValido = validacaoValores(valorCampoA.value, valorCampoB.value);
    
    document.querySelector('.success-Message').style.display = 'none';
    document.querySelector('.unsuccess-Message').style.display = 'none';

    const mensagemDeSucesso = `Sucesso! ${valorCampoB.value} é maior que ${valorCampoA.value}`;
    const mensagemDeErro = `Erro! ${valorCampoB.value} não é maior que ${valorCampoA.value}`;

    if (formValido) {
        document.querySelector('.success-Message').innerHTML = mensagemDeSucesso;
        document.querySelector('.success-Message').style.display = 'block';
        valorCampoA.value = '';
        valorCampoB.value = '';
    } else {
        document.querySelector('.unsuccess-Message').innerHTML = mensagemDeErro;
        document.querySelector('.unsuccess-Message').style.display = 'block';
        valorCampoA.value = '';
        valorCampoB.value = '';
    }

})