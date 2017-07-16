const ObjectID = require('mongodb').ObjectID;
db = require('../index').db;

class Message {
    constructor({senderID, receiveID, payload}) {
        this.senderID = senderID;
        this.receiveID = receiveID;
        this.payload = payload;
    }

    toString() {
        return `${this.senderID} ${this.receiveID} ${this.payload}`
    }
}

exports.create = (msgData, cb) => {
    try {
        db.collection('messages').insertOne(new Message(msgData)).then((r) => cb(null, r.insertedId));
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
exports.update = (msgID, msgData, cb) => {
    try {
        db.collection('messages').updateOne({_id: ObjectID(msgID)}, new Message(msgData)).then((r) => cb(null, r.result));
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
exports.all = (cb) => {
    try {
        db.collection('messages').find({}).toArray().then((r) => cb(null, r));
    } catch (e) {
        cb(e);
    }
};