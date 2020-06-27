const passport = require('passport')
const passportJwt = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passportLocal = require('passport-local').Strategy
const db_connection = require("../db/db_connection") 

passport.use(new passportJwt({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'SUFLEX.WEBTOKEN',
}, async (payload, done) => {
  try {
    const [user] = await db_connection('users').where('id', payload.sub)  
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));


passport.use(new passportLocal({
  usernameField: 'login',
}, async (login, password, done) => {
  try {
    const [user] = await db_connection('users').where('login', login);
    
    if (!user) {
      return done(null, false);
    }

    if (user.password !== password) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));