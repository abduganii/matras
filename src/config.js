const connection = {
    connectionString: '',
    connectionElString:'postgres://zpbqfhxc:J2gA2xu55aiLBtcYcd_jV_WRSd0ug2-p@tai.db.elephantsql.com/zpbqfhxc'
}
const PORT = process.env.port || 5000
const SECRET_KEY = "NO_SECRET_KEY"
module.exports = {
    connection,
    PORT,
    SECRET_KEY
}

