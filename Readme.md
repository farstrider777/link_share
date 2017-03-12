###Built API to manage a contact list###

Skills practiced

1. Sequelize
  * Used Sequelize to write migrations and models.
  * Edited my models to have all the properties I wanted.
  * Wrote routes to access my tables
  * Wrote controllers that defined the behavior of my Routes.
2. Security
  * Used bcrypt to encrypt my users passwords and create a salt.
  * Used jwt-simple to create an access token for each user based on their passwords and salt.
  * Refused access on specific routes if the user didn't provide password/access token.
3. Node.js
  * Installed and ran a server in my terminal.
  * Debugged error codes and problems with connections.
4. Postman
  * Used Postman to test my routes and check my database.
5. API Documentation
  * Wrote simple and organized documentation for my API.

###API Documentation###

----
POST /users

Adds a user to Users. Info needed in the body is:

* username: string
* email: string
* user_password: string
----
POST /login

Must have correct password and email!

Returns a token and your info. Info needed in the body is:

* username: string
* email: string
* user_password: string
----
POST /submitLink

Must send proper access-token in the headers!

Puts a link on the page for all your friends to comment on. Info needed in the body:

* title: string
* destination_url: string
----
GET /retrieveALL

Returns all of the links, the most recently posted first. No info needed.
----
POST /comment

Must send proper access-token in the headers!

Adds a comment to an existing link. Info needed in the body:

* link_id: number
* text: what you want to say
----
POST /retrieveComments

Retrieves all the comments about a specific link. You need to put the link_id in the headers:

* link_id: number of link
