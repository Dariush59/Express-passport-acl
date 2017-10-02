var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');

// importing passport config
var is_authenticated = require('../config/possport').is_authenticated;


var acl = require('../config/acl');

var models = require('../models');
// var _ = require('lodash');


// passport routes
router.post("/login", authController.login);

// router.get("/secret", is_authenticated, function(req, res) {
//     res.json({ message: "Success! You can not see this without a token" });
// });

router.get( '/secret', is_authenticated , function( request, response ) {
    	console.log("request", request.isAuthenticated() );
    	console.log("request.user", { user : request.user.dataValues } );
  		// console.log("acl.middleware( 1, '1' )", acl.middleware1( 1 ));
  		
  		console.log("originalUrl", request.originalUrl);
  		console.log("url", request.url);
        // to see user roles
        acl.userRoles( request.user.id, function( error, roles ){
	        console.log('User: ' , JSON.stringify( request.user.email ) , ' Roles: ' , JSON.stringify( roles )) ;
	    });
        // to see user permissions
        acl.allowedPermissions(request.user.id, request.originalUrl, function(err, res){
		    if(res){
		        console.log(res);
		    }
		    else{
		    	console.log(err);
		    }
		});

        // to see is the user has permission or not
	   	acl.isAllowed(request.user.id, request.originalUrl, 'get', function(err, res){
		    if(res){
		    	
		        console.log("User " , request.user.email ," is allowed to get user");
		    }
		    else{
		    	console.log("User " , request.user.email ," is NOT allowed to get user");
		    }
		  
		});
		response.status(200).json({ message: "Success! You can not see this without a token" });
        
		// // console.log("global out", tt );
		// console.log('result out', 
		// 	models.User.find({
		// 	    where: {
		// 	        id: {
		// 	            $eq : 1
		// 	        }
		// 	    },
		// 	    attributes: ['email','id'],
		//     	raw : true,
		//     	plain: true,
		//     	values: true
		// 	})
		// 	.then(function(user) {
		// 		console.log('result in', user);
		// 		return user;	
		// 	}));
    }
);



router.get( '/status', is_authenticated, function( request, response ) {
    acl.userRoles( request.user.id, function( error, roles ){
        response.json( 'User: ' + JSON.stringify( request.user.email ) + ' Roles: ' + JSON.stringify( roles ) );
    });
});

router.get( '/logout', function( request, response ) {
    request.logout();
    response.send( 'Logged out!' );
});


router.get("/accounts", function( request, response ) {
	console.log('hi');
	// models.Account
 //        .create({
 //            account: 'demo',
 //            hotel_logo: 'test',
 //        })
 //        .then(function(result) {
 //            res.status(200).json({
 //                succes: true,
 //                data: result
 //            });
 //        })
 //        .catch(function(error) {
 //            res.status(500).json({
 //                succes: false,
 //                message: error
 //            });
 //        });
});


module.exports = router;