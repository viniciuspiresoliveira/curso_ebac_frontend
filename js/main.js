$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(99) 99999-9999'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    $('#cep').mask('00000-000', {
        placeholder: '12345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }
    })
})
