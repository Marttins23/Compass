const Job = require('../models/Job');
const JobDAO = require('../dao/jobDAO');

exports.handleAddJobRequest = (req, res) => {
    let {title, description, salary, company, email, new_job} = req.body;

    Job.create({title, description, salary, company, email, new_job})
        .then(() => {res.redirect('/')})
        .catch((err) => {console.log(err)});
};

exports.showAddJobFormView = (req, res) => {
    res.render('add');
};

exports.showJobById = (req, res) => {
    JobDAO.getById(req.params.id).then(job => {
        res.render('view', {job});
    });
};