const LocalStrategy =require('passport-local')
.Strategy;
const mongoose =require('mongoose');
const bcrypt =require('bcryptjs');

//Load user model
const User=mongoose.model('users');

module.exports=function(passport){
  passport.use(new LocalStrategy({usernameField:'email'},(email,password,done)=>{
    //console.log(email);
    //console.log(password);
    User.findOne({
      email:email
    }).then(user=>{
      if (!user) {
        return done(null,false,{message:'No user Found'});
      } else {
        
      }
    })
  }));
}