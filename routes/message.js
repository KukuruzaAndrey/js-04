router = require('express').Router();
msgService = require('../servises/message');
router.post('/msg', (req, res) => {
    msgService.create(req.body, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data);
        }
    });
});
router.get('/msg/:msgID', (req, res) => {
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
router.put('/msg/:msgID', (req, res) => {
    msgService.update(req.params.msgID, req.body, (err, data) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        } else {
            res.send(data)
        }
    });
});
router.delete('/msg/:msgID', (req, res) => {
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