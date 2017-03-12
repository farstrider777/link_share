const Users = require("../models").Users;
const Links = require("../models").Links;
const Comments = require("../models").Comments;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

module.exports = {

  create (req, res) {
      var salt = bcrypt.genSaltSync(10);
      //console.log(salt);
      var hashedPass = bcrypt.hashSync(req.body.user_password, salt);
      //console.log(hashedPass)
        Users.create({
        username: req.body.username,
        email: req.body.email,
        user_password: hashedPass,
        user_salt: salt,
        //user_password: req.body.user_password,
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
    },


      login (req, res) {
         Users.findOne({
           where: {
             email: req.body.email
           }
         })
           .then(user => {
             if (!user) {
               return res.status(401).send({ message: "No such email or wrong password." });
             }
             var input = bcrypt.hashSync(req.body.user_password, user.user_salt);
             if (input === user.user_password) {
               var token = jwt.encode({ id: user.id, name: user.username }, appSecrets.jwtSecret);
               //return res.status(200).send(token);
               var json = {
                 user: user,
                 token: token
               };
               return res.status(200).send(json);
             } else {
               return res.status(401).send({ message: "No such email or wrong password." });
             }
          })
           .catch(error => res.status(400).send(error));
        },

  retrieveAll (req, res){
    Links.findAll({order: '`id` DESC'})
    .then(links => res.status(201).send(links))
    .catch(error => res.status(400).send(error));
  },

  submitLink (req, res){
    var token = req.headers['access-token'];
    var decoded = jwt.decode(token, appSecrets.jwtSecret);
    var userId = decoded.id;

    Links.create({
    title: req.body.title,
    destination_url: req.body.destination_url,
    user_id: userId,
    //user_password: req.body.user_password,
    })
    .then(links => res.status(201).send(links))
    .catch(error => res.status(400).send(error));
  },

  comment (req, res){
    var token = req.headers['access-token'];
    var decoded = jwt.decode(token, appSecrets.jwtSecret);
    var userId = decoded.id;
    Comments.create({
      link_id: req.body.link_id,
      user_id: userId,
      text: req.body.text
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },

  retrieveComments (req, res){
    Comments.findAll({where: {
                      link_id: req.headers.link_id
                    }})
    .then(comments => res.status(201).send(comments))
    .catch(error => res.status(400).send(error));
  }

};
