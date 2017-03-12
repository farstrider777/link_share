ROUTES

1. users sign up  ----
2. users sign in  ----
3. any user retrieve links from most recent to least recent  --1/2 done
4. Logged in users can submit links with at least a title and destination (url) ----
5. Logged in users can add comments on any link. ---
6. Any user can retrieve the comments for a given link.

USERS TABLE
id | username | email | user_password(encrypted) | user_salt

LINKS TABLE
id | title | destination_url | user_id (that posted it)

COMMENTS TABLE
id | link_id(foreign id) | user_id (that made comment) |text
