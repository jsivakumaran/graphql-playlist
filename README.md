# graphql-playlist
Playlist

## Description
Simple Library Lookup Website using Graphql, Mongodb and React.js

## Setup Instructions
1. npm install
2. Create an account on mlab
    A. Create a database
    B. Create a User
3. Create an .env file in the root folder with the only line being:
    `MLAB_URL = mongodb://<dbuser>:<dbpassword>@ds012345-a0.mlab.com:56789/<mydb>`
    - replace <dbuser> with username and <dbpassword> with password and <mydb> with db name
4. Run the app - nodemon app