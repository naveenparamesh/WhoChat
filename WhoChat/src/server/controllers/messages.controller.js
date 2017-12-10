const Message=require('../models/message');
const User=require('../models/user');

exports.getMessages=function(req,res,next){
    console.log("THE REQUEST TAG: ", req.query.tag);
    Message.find({tag: req.query.tag}).sort({upvotes: -1}).exec(function(err,messages){
        console.log(messages);
        res.status(200).json(messages)
    });
}

exports.createMessage=function(req,res,next){
    console.log(req.body);
    var m=new Message({nickname: req.body.nickname, message: req.body.message, numComments: req.body.numComments, upvotes: req.body.upvotes, tag: req.body.tag, comments: []});
    m.save(function(err,message){
        if (err) {console.log(err);}
        res.status(201).json(message);
    });
}

exports.createComment=function(req, res, next){
    query = {nickname: req.body.nickname, message: req.body.message};
    query_update = {$push: {comments: {nickname: req.body.userComment, message: req.body.commentValue}}, $inc: {numComments: 1}};
    Message.update(query, query_update).exec(function(err, message){
        res.status(201).json(message);
    });
}

exports.upVote=function(req,res,next){
    query = {message: req.body.message};
    console.log(req.body.nickname, " and:  ", req.body.message);
    query_update = {$inc: { upvotes: 1 }};
    Message.update(query, query_update).exec(function(err, message){
       
    });
}

exports.downVote=function(req,res,next){
    query = {message: req.body.message};
    query_update = {$inc: { upvotes: -1 }};
    Message.update(query, query_update).exec(function(err, message){
        
    });
}

// exports.upVote2=function(req,res,next){
//     query = {message: req.body.message};
//     query_update = {$inc: { upvotes: 2 }};
//     Message.update(query, query_update).exec(function(err, message){
        
//     });
// }

// exports.downVote2=function(req,res,next){
//     query = {message: req.body.message};
//     query_update = {$inc: { upvotes: -2 }};
//     Message.update(query, query_update).exec(function(err, message){
        
//     });
// }