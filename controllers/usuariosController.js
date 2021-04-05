const usuariosController = {
    index: (req, res) => {
        return res.send('Estou exibindo essa msg através do controller!');
    }
}

module.exports = usuariosController;