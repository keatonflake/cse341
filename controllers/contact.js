const mongodb = require('../db/connect');

const getContact = async (req, res) => {
    // const result = await mongodb.getDb().DB().collection('contact').find();
    const result = await mongodb.getDb().db().collection('contact').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

module.exports = {
    getContact
}