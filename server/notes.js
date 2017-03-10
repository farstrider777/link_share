ROUTES

1. users sign up
2. users sign in
3. any user retrieve links from most recent to least recent
4. Logged in users can submit links with at least a title and destination (url)
5. Logged in users can add comments on any link.
6. Any user can retrieve the comments for a given link.

USERS TABLE
id | username | email | user_password(encrypted) | usersalt

LINKS TABLE
id | title | destination_url | user that posted it

COMMENTS TABLE
id | link id(foreign id) | user id that made comment |text
