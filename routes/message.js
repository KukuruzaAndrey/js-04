router = require('express').Router();
msgService = require('../servises/message');
router.post('/user/:userID/msg', (req, res) => {
    msgService.create(req.params.userID, req.body, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data);
        }
    });
});
router.get('/user/:userID/msg/:msgID', (req, res) => {
    msgService.read(req.params.msgID, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});
router.put('/user/:userID/msg/:msgID', (req, res) => {
    msgService.update(req.params.msgID, req.params.userID, req.body, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});
router.delete('/user/:userID/msg/:msgID', (req, res) => {
    msgService.delete(req.params.msgID, (err, data) => {
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