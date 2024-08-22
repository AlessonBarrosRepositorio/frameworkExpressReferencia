const { Usuario } = require('../models');

const loginController = {
    post: async(req, res) => {
        try{
            let email = req.body.emailLogin;
            let senha = req.body.senhaLogin;
            let loginCertoOuNao = false;

            let usuario = await Usuario.findOne({where: {email: email, senha: senha}});

            if(usuario){
                loginCertoOuNao = true;
                req.session.usuario_id = usuario.id;   
            }

            let formato = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if(loginCertoOuNao){
                req.session.mensagem = 'Bem-vindo, ' + usuario.nome + '!';
                req.session.usuario_id = usuario.id;
            }
            else{
                if(formato.test(email) && senha != ''){
                    req.session.mensagemLogin = 'Dados incorretos, tente novamente!';
                }

                if(email == '' && senha != ''){
                    req.session.mensagemLogin = 'Digite seu e-mail cadastrado!';
                }

                if(email != '' && !formato.test(email) && senha != ''){
                    req.session.mensagemLogin = 'E-mail inválido!';
                }

                if(formato.test(email) && senha == ''){
                    req.session.mensagemLogin = 'Digite sua senha!';
                }

                if(email == '' && senha == ''){
                    req.session.mensagemLogin = 'Digite seus dados de cadastro!';
                }

                if(email != '' && !formato.test(email) && senha == ''){
                    req.session.mensagemLogin = 'E-mail inválido e senha requerida!';
                }
            }
        }
        catch(error){
            console.error('Erro no método post do controller loginController: ' + error);
            req.session.mensagemLogin = 'Erro ao tentar fazer o login. Por favor, tente novamente mais tarde.';
        }

        return res.redirect('/');
    }
}

module.exports = loginController;