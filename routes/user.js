router = require('express').Router();
userService = require('../servises/user');
router.post('/user', (req, res) => {
    userService.create(req.body, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data);
        }
    });
});
router.get('/user', (req, res) => {
    userService.all((err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data);
        }
    });
});
router.get('/user/:userID/', (req, res) => {
    userService.read(req.params.userID, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});
router.put('/user/:userID/', (req, res) => {
    userService.update(req.params.userID, req.body, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});
router.delete('/user/:userID/', (req, res) => {
    userService.delete(req.params.userID, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});

router.get('/user/:userID/receivers', (req, res) => {
    userService.allReceivers(req.params.userID, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});

module.exports = router;