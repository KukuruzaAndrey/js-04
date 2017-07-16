const ObjectID = require('mongodb').ObjectID;
db = require('../index').db;

class Message {
    constructor(senderID, receiveID, payload) {
        this.senderID = senderID;
        this.receiveID = receiveID;
        this.payload = payload;
    }

    toString() {
        return `${this.senderID} ${this.receiveID} ${this.payload}`
    }
}

exports.create = (senderID, msgData, cb) => {
    try {
        db.collection('messages').insertOne(new Message(senderID, msgData.receiveID, msgData.payload)).then((r) => cb(null, r.insertedId));
    } catch (e) {
        cb(e);
    }
};
exports.read = (msgID, cb) => {
    try {
        db.collection('messages').findOne({_id: ObjectID(msgID)}).then((r) => cb(null, r));
    } catch (e) {
        cb(e);
    }
};
exports.update = (msgID, senderID, msgData, cb) => {
    try {
        db.collection('messages').updateOne({_id: ObjectID(msgID)}, new Message(senderID, msgData.receiveID, msgData.payload)).then((r) => cb(null, r.result));
    } catch (e) {
        cb(e);
    }
};
exports.delete = (msgID, cb) => {
    try {
        db.collection('messages').deleteOne({_id: ObjectID(msgID)}).then((r) => cb(null, r.result));
    } catch (e) {
        cb(e);
    }
};