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

const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db().collection('contact').insertOne(contact);
    if (result) {
        res.status(201).json(result);
    } else {
        res.status(500).json({ message: 'Error creating contact' });
    }
}

const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('contact')
      .replaceOne({ _id: userId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'error updating contact.');
    }
  };
  
  const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('contact').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'error, failed to delete the contact.');
    }
  };
  
  module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
  };