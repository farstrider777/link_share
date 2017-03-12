const Users = require("../models").Users;
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
      .then(contacts => res.status(201).send(users))
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

             console.log("hey" + user.user_salt);
             var input = bcrypt.hashSync(req.body.user_password, user.user_salt);
             console.log(`hashed input: ${input}, stored password: ${user.user_password}`);
            if (input === user.user_password) {
               var token = jwt.encode({ id: user.id, name: user.username }, appSecrets.jwtSecret);
               return res.status(200).send(token);
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
        }


};

  // module.exports = {
  //   create (req, res) {
  //    //res.status(200).send("Hello world!");
  //       Contacts.create({
  //       name: req.body.name,
  //       phone_number: req.body.phone_number,
  //       city: req.body.city,
  //       state: req.body.state,
  //       photo_url: req.body.photo_url,
  //       email: req.body.email,
  //     })
  //     .then(contacts => res.status(201).send(contacts))
  //     .catch(error => res.status(400).send(error));
  //   },
  //
  //
  //
  //
  //
  //   listContacts (req, res) {
  //       Contacts.findAll({
  //         // where: {
  //         //   id: req.params.id
  //         // }
  //       })
  //       .then(contacts => res.status(201).send(contacts))
  //       .catch(error => res.status(400).send(error));
  //     },
  //
  //   listOneContact (req, res) {
  //       Contacts.findById(req.params.id)
  //       .then(contacts => res.status(201).send(contacts))
  //       .catch(error => res.status(400).send(error));
  //     },
  //
  //
  //
  //
  //
  //     updateContact (req, res) {
  //
  //         Contacts.update({
  //           name: req.body.name || Contacts.name,
  //           phone_number: req.body.phone_number || Contacts.phone_number,
  //           city: req.body.city || Contacts.city,
  //           state: req.body.state || Contacts.state,
  //           photo_url: req.body.photo_url || Contacts.photo_url,
  //           email: req.body.email || Contacts.email,
  //         }, {where: {
  //                     id:req.params.id
  //                   }
  //           })
  //         .then(contacts => res.status(201).send(contacts))
  //         .catch(error => res.status(400).send(error));
  //       },
  //
  //
  //
  //
  //     deleteContact (req, res) {
  //       Contacts.destroy({
  //       //  name: req.body.name || Contacts.name
  //        where: {
  //                   id:req.params.id
  //               }
  //         })
  //       .then(contacts => res.status(201).send(contacts))
  //       .catch(error => res.status(400).send(error));
  //     }
  //
  // };
