$(document).ready(function(){
    $(document).on('submit', '#entrarLoginS', function(event){
        event.preventDefault();
        //var classeDoBotao = $(this).find('#gerarRelatorioSubmit').attr('class');

        //let nomeTabelaAntiga = $('#nomeTabelaAntiga' + classeDoBotao).text();
        //nomeTabelaAntiga = nomeTabelaAntiga.substring(nomeTabelaAntiga.indexOf('Nome: ') + 'Nome: '.length);
        //let novoNomePlanilha = $('#novoNomePlanilha' + classeDoBotao).val();
        //let novoPorcentagem = $('#novoPorcentagem' + classeDoBotao).val();
        //let cargo = $('#cargo' + classeDoBotao).val();

        var login = $('.entraLogin').find('.login').val();
        var senha = $('.entraLogin').find('.senha').val();

        $.ajax({
            url: '/geracaoDeRelatorio',
            type: 'post',
            data: { login, senha },
            success: function(response){
                
            }
        });
    });
});
