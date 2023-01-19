### Project Creation
    - `npm init -y` [project starter]
    - `npm install express` [create a server]
    - create `index.js` file for server script 
    - after written script. execute `node index.js`
    - `npm install nodemon` and go to `packaje.json` file and update `"start" : "nodemon index.js"`
    - now run `npm start`
    - install postgress `npm i pg` and config `db.js` file


### Postgress command
    - `psql -U postgres` 
    - `\l` [show all list of DB]
    - `create database bookDB`
    - if quit then press `q`
    - move to another database `\c bookdb`
    - check table `\dt`
    - `DROP TABLE book;`

### Reference
    - [pg](https://www.npmjs.com/package/pg), [pg pool](https://node-postgres.com/apis/pool)
    - [uuid](https://www.npmjs.com/package/uuid)

