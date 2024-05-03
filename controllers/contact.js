const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
        const result = await mongodb.getDb().db().collection('contact').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    };

const getContactById = async (req, res) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contact').findOne({_id: id});
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Contact not found' });
    }
};

module.exports = {
    getAllContacts,
    getContactById
};
