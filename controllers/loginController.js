const { Usuario } = require('../models');

const loginController = {
    post: async(req, res) => {
        try{
            let login = req.body.login;
            let senha = req.body.senha;

            let formato = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            let usuario = await Usuario.findOne({
                where: {
                    login: login,
                    senha: senha
                }
            });

            if(usuario){
                res.send();
                req.session.mensagem = 'Bem-vindo, ' + usuario.nome + '!';
                req.session.usuario_id = usuario.id;
            }

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
        catch(error){
            console.error('Erro no método post do controller loginController: ' + error);
            req.session.mensagemLogin = 'Erro ao tentar fazer o login. Por favor, tente novamente mais tarde.';
        }

        return res.redirect('/');
    }
}

module.exports = loginController;