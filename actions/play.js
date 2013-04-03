var Users = require('../Models/User.js');

function connectPhone(req,res) {

  Users.User.findOne({_id:req.session.user_id}, function(err, user) {
      if(err) console.log(err)
      var connection_id = 1;

      res.render('phoneconnect', {
          title: 'connect',
          user: user,
          connection_id: connection_id
      });
  });

}

exports.connectPhone = connectPhone;