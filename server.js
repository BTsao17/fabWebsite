const express = require(`express`);
const app = express()

app.use(express.static('public')) //'if you see a static file, try taking a look at the directory "public", and see if it's there'; since we have a static about page in public folder: localhost:8080 since we have an index.html in the public folder

app.listen(8080, function() {
    console.log('Listening on Port 8080')
})