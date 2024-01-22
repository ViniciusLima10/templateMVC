const HomeModel = require('../models/HomeModel.js');

exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: "ola mundo",
    array: [0,1,2,3,4,5,6,7,8,9],
  });
  console.log(req.session.usario)
};

// HomeModel.create({titulo: "ola", descricao: "dasd"})

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
