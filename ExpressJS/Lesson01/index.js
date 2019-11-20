const express = require('express');
const app = express();
const port = 3880;

app.get('/',(request, response) => {
    response.send('Hello Long');
})

app.listen(port, () => console.log(`Server listening on port ${port}`));