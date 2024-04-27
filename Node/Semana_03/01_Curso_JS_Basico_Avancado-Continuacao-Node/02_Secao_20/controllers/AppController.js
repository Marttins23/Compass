const JobDAO = require('../dao/jobDAO');

exports.handleHomePageRequest = (req, res) => {

    let dados;
    let search = req.query.job;

    if(search) {
        dados = JobDAO.getByTitle(search);
    } else {
        dados = JobDAO.getAll();
    }

    dados.then(jobs => {
        res.render('index', {jobs, search});
    });
}