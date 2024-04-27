const Job       = require('../models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.getAll = async function() {
    return await Job.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    });
}

exports.getByTitle = async function(title) {

    let query = '%'+title+'%';

    return await Job.findAll({
        where: {title: {[Op.like]: query}},
        order: [
            ['createdAt', 'DESC']
        ]
    });
}

exports.getById = async function(id) {
    return await Job.findOne({
        where: {id: id}
    });
}