
var models = require('../models');
var Acl       = require('acl');
var Sequelize = require('sequelize');
var AclSeq    = require('acl-sequelize');
var db        = models.sequelize;//new Sequelize( 'test', 'root', 'root');    
var acl       = new Acl(new AclSeq(db, { prefix: 'acl_' }));

// // allow guests to view posts
// acl.allow("guest", "post", "view");

// // allow registered users to view and create posts
// acl.allow("staff", "post", ["view", "create"]);

// // allow administrators to perform any action on posts
// acl.allow("admin", "post", "*");

// Define roles, resources and permissions
acl.allow([
    {
        roles: 'admin',
        allows: [
            { resources: ['auth', 'user','/auth/secret'], permissions: '*' }
        ]
    }, {
        roles: 'staff',
        allows: [
            { resources: ['/auth/status'], permissions: 'get' }
        ]
    }, {
        roles: 'guest',
        allows: [
        	{ resources: ['users/create'], permissions: ['get', 'post'] }
        ]
    }
]);

// Inherit roles
//  Every user is allowed to do what guests do
//  Every admin is allowed to do what users do
acl.addRoleParents( 'staff', 'guest' );
acl.addRoleParents( 'admin', 'staff' );
// acl.addUserRoles(0, "guest");



module.exports = acl;