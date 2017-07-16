const ObjectID = require('mongodb').ObjectID;
db = require('../index').db;

class User {
    constructor({name, surname, email}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    toString() {
        return `${this.name} ${this.surname} ${this.email}`
    }
}

exports.create = (userData, cb) => {
    try {
        db.collection('users').insertOne(new User(userData)).then((r) => cb(null, r.insertedId));
    } catch (e) {
        cb(e);
    }
};
exports.read = (userID, cb) => {
    try {
        db.collection('users').findOne({_id: ObjectID(userID)}).then((r) => cb(null, r));
    } catch (e) {
        cb(e);
    }
};
exports.update = (userID, userData, cb) => {
    try {
        db.collection('users').updateOne({_id: ObjectID(userID)}, {$set: new User(userData)}).then((r) => cb(null, r.result));
    } catch (e) {
        cb(e);
    }
};
exports.delete = (userID, cb) => {
    try {
        db.collection('users').deleteOne({_id: ObjectID(userID)}).then((r) => cb(null, r.result));
    } catch (e) {
        cb(e);
    }
};
exports.all = (cb) => {
    try {
        db.collection('users').find({}).toArray().then((r) => cb(null, r));
    } catch (e) {
        cb(e);
    }
};

//да, знаю, якісь костилі, але не знав як правильно спроектувати базу для зручної вибірки
exports.allReceivers = (senderID, cb) => {
    try {
        db.collection('messages').find({senderID: senderID}).toArray()
            .then((r) => {
                    const receivers = new Set(r.map(el => el.receiveID));
                    const receiversID = [...receivers].map(el => ObjectID(el));
                    db.collection('users').find({_id: {$in: receiversID}}).toArray().then(r => cb(null, r));
                }
            );
    }
    catch (e) {
        cb(e);
    }
};
