const config = require("../basededatos/auth.config");
const db = require("../models");
var Usuario = db.usuario;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const usuario = new Usuario({
    // usuarioname: req.body.usuarioname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  usuario.save((err, usuario) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          usuario.roles = roles.map(role => role._id);
          usuario.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "El usuario fue registrado exitosamente" });
          });
        }
      );
    } else {
      Role.findOne({ name: "usuario" }, (err, role) => { //Revisar usuario
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        usuario.roles = [role._id];
        usuario.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "El usuario fue registrado exitosamente" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  Usuario.findOne({
    email: req.body.email
  })
    .populate("roles", "-__v")
    .exec((err, usuario) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!usuario) {
        return res.status(404).send({ message: "Usuario no encontrado." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        usuario.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Clave inválida"
        });
      }

      var token = jwt.sign({ id: usuario.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < usuario.roles.length; i++) {
        authorities.push("ROLE_" + usuario.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: usuario._id,
        // usuarioname: usuario.usuarioname,
        email: usuario.email,
        roles: authorities,
        accessToken: token
      });
    });
};
