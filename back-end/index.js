const express = require('express');
const User = require('./db/user');
const cors = require('cors');
require('./db/config');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
});

app.post('/login', async (req, resp) => {
    if (req.body.password && req.body.username) {
        const user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        }
        else {
            resp.send("No user found");
        }
    }
    else {
        resp.send("No user found");
    }

})


app.listen(5000);