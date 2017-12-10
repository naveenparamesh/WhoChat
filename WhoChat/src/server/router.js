const messageController=require('./controllers/messages.controller');
const userController=require('./controllers/users.controller');
express = require('express');
//require your controllers here

module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
     const messageRoutes = express.Router();
     const userRoutes = express.Router();
     messageRoutes.get('/',messageController.getMessages);
    // userRoutes.get('/:id',userController.getUser);
    messageRoutes.post('/',messageController.createMessage);
    messageRoutes.post('/comment', messageController.createComment);
    userRoutes.post('/', userController.createUser);
    userRoutes.post('/upvote', userController.upvote);
    userRoutes.post('/downvote', userController.downvote);

     apiRoutes.use('/messages',messageRoutes);
     apiRoutes.use('/users', userRoutes);


    // apiRoutes.get('/test', testController.test);
    
    //attach router to root
    app.use('/api', apiRoutes);
};