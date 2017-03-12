module.exports = {
   authenticate (req, res, next) {
     console.log("Inside my middleware");
     console.log(req);
     next();
   }
};
