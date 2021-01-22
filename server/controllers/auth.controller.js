// IMPORT QUERIES
const { findUserByUsername, setUserOnline, setUserOffline, createUser, findUserBySocketId } = require('../queries/user.queries');
const { getUsers } = require('../controllers/user.controller');

exports.signin = (socket) => {
  socket.on('signin', async ({username, password}, callback) => {
    try {
      const user = await findUserByUsername(username);
      if(user) {
        const match = await user.comparePasswords(password, user.password);
        if(match) {
          const isAlreadyOnline = user.isOnline;
          if(!isAlreadyOnline) {
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
              message: "Vous êtes déjà connecté sur un autre appareil"
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
        const newUser = await createUser(username, password);
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

exports.disconnect = async (socket, messenger) => {
  let user = await findUserBySocketId(socket.conn.id);
  await setUserOffline(user._id);
  getUsers(messenger);
};