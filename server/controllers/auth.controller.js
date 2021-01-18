// IMPORT QUERIES
const { findUserByUsername, setUserOnline, createUser } = require('../queries/user.queries');

exports.signin = (socket) => {
  socket.on('signin', async ({username, password}, callback) => {
    try {
      const user = await findUserByUsername(username);
      if(user) {
        const match = await user.comparePasswords(password, user.password);
        if(match) {
          await setUserOnline(user._id, socket.conn.id);
          let res = {
            status: 200,
            message: "Vous êtes connecté",
            username: user.username,
            user_id: user._id
          };
          callback(res);
        } else {
          let res = {
            status: 403,
            message: "Mauvaise nom d'utilisateur ou mot de passe"
          };
          callback(res);
        } 
      } else {
        let res = {
          status: 403,
          message: "Mauvais nom d'utilisateur ou mot de passe"
        };
        callback(res);
      }
    } catch (error) {
      throw error;
    }
  });
};

exports.signup = (socket) => {
  socket.on('signup', async ({username, password}, callback) => {
    try {
      const existingUser = await findUserByUsername(username);
      if(!existingUser) {
        const socketId = socket.conn.id;
        const newUser = await createUser(username, password, socketId);
        if(newUser) {
          let res = {
            status: 200,
            message: "Félicitation, votre compte a été créé"
          };
          callback(res);
        } else {
          let res = {
            status: 500,
            message: "Une erreur s'est produite. Veuillez vérifier le nom d'utilisateur ou le mot de passe"
          };
          callback(res);
        }
      } else {
        let res = {
          status: 403,
          message: "Ce nom d'utilisateur est déjà utilisé. Veuillez choisir un autre"
        };
        callback(res);
      }
    } catch (error) {
      throw error;
    }
  });
};