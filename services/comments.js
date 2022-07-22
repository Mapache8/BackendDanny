const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getComments(page = 1, id) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(`SELECT id_c, id_p, author, body 
        FROM comments WHERE id_p=${id} LIMIT ${offset}, ${
        config.listPerPage
    }`);
    const data = helper.emptyOrRows(rows);
    const meta = {
        page
    };

    return {data, meta};
}

module.exports = {
    getComments
};