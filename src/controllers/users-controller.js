const JWT = require('jsonwebtoken')

function tokenGenerator(user){
  console.log(`${user.id} >> TOKEN`);
  return JWT.sign({
    iss: 'SUFLEX',
    sub: user.id,
  }, 'SUFLEX.WEBTOKEN');
}

class UserControlador {

  static rotas() {
      return {
          logar: '/logar'
      };
  }

  logar(){
      return (req,res) => {
        const  { user }  = req;
        const token = tokenGenerator(user);
        return res.status(202).json({ token });
      }
  }
}

module.exports = UserControlador