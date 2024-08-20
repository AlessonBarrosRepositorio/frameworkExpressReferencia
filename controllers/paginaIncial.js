
const paginaInicial = {
    get: async(req, res) => {
        try{
            res.render("paginaPrincipal")
        }
        catch(error){
            console.error(error);
        }
    },
}

module.exports = paginaInicial;