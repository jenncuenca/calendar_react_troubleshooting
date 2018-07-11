var Profile = require("./Profile");

module.exports = {
  // this method handles finding all profiles in the db 
//   object syntax-using key value pairs
   find: function(req, res) {
//     Profile.find().then(function(profiles) {
//       res.json(profiles);
//     }).catch(function(err) {
//       res.json(err);
//     });
   },
  // this method handles adding new profiles to the db
  insert: function(req, res) {
    Profile.create(req.body).then(function(profile) {
      res.json(profile);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting profiles from the db
  delete: function(req, res) {
    Profile.remove({
      _id: req.params.id
    }).then(function(article) {
      res.json(article);
    }).catch(function(err) {
      res.json(err);
    });
  }
};