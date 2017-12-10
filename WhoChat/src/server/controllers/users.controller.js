const User=require('../models/user');
const messageController=require('./messages.controller');


exports.createUser=function(req, res, next){
    User.find({nickname: req.body.nickname}).exec(function(err, record){
        if(err) {console.log("Error creating user")}
        if(record.length == 0){
            
            var u=new User({nickname: req.body.nickname, messages_voted_on: []});
            u.save(function(err, user){
                if (err) {console.log(err);}
                
                res.status(201).json(user);
            });
        }
        else {
            res.status(201).json({});
        }
    });

    

    
}


exports.upvote=function(req, res, next){

    User.find({nickname: req.body.nickname, messages_voted_on: req.body.message}).exec(function(err, record){
        if(record.length == 0){//they can vote on message, in this case upvote
            User.update({nickname: req.body.nickname}, {$push: {messages_voted_on: req.body.message}}).exec(function(err, record){
                messageController.upVote(req, res, next);
                res.status(201).json({});
            });
        }
    });

    // User.find({nickname: req.body.nickname, messages_upvoted: req.body.message}).exec(function(err, record){
    //     //console.log("Record is: ", record);
    //     if(record.length == 0){ // meaning the user can upvote
    //         //console.log("record is null");
    //         User.find({nickname: req.body.nickname, messages_downvoted: req.body.message}).exec(function(err, record){
    //             if(record.length == 0){//if he has not already downvoted
    //                 //console.log("record is upvote1");
    //                 messageController.upVote(req, res, next);
    //             }
    //             else {
    //                 messageController.upVote2(req, res, next);
    //             }
    //         });
            
    //         //Allow user to downvote next time
    //         User.update({nickname: req.body.nickname, messages_downvoted: req.body.message}, {$pull: {messages_downvoted: req.body.message}}).exec(function(err, user){
    //             if(err){console.log(err);}

    //         });

           
    //         User.update({nickname: req.body.nickname}, {$push: {messages_upvoted: req.body.message}}).exec(function(err, user){
    //             if(err){console.log(err);}
    //         });
    //     }
    // });

    // res.status(201).json({});

}

exports.downvote=function(req, res, next){
    User.find({nickname: req.body.nickname, messages_voted_on: req.body.message}).exec(function(err, record){
        if(record.length == 0){//they can vote on message, in this case upvote
            User.update({nickname: req.body.nickname}, {$push: {messages_voted_on: req.body.message}}).exec(function(err, record){
                messageController.downVote(req, res, next);
                res.status(201).json({});
            });
        }
    });
    // User.find({nickname: req.body.nickname, messages_downvoted: req.body.message}).exec(function(err, record){
    //     if(record.length == 0){ // meaning the user can downvote
    //         User.find({nickname: req.body.nickname, messages_upvoted: req.body.message}).exec(function(err, record){
    //             if(record.length == 0){//if he has not already upvoted
    //                 messageController.downVote(req, res, next);
    //                 User.LoggedIn(req.body.nickname, false);
    //             }
    //             else {
    //                 messageController.downVote2(req, res, next);
    //             }
    //         });
    //         //Allow user to upvote next time
    //         User.update({nickname: req.body.nickname, messages_upvoted: req.body.message}, {$pull: {messages_upvoted: req.body.message}}).exec(function(err, user){
                
    //         });
    //         User.update({nickname: req.body.nickname}, {$push: {messages_downvoted: req.body.message}}).exec(function(err, user){
                
    //         });;
    //     }
    // });
    // res.status(201).json({});
}