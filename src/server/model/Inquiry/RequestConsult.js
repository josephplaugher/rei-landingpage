import BaseClass from 'ServerUtil/BaseClass'
import dbConn from 'ServerUtil/postgres'
import Log from 'ServerUtil/Log'
import Email from './Email'

class RequestConsult extends BaseClass {
    constructor(req, res) {
        super()
        this.inputs = req.body
        this.req = req
        this.res = res
    }

    logRequest = () => {
        const r = this.req.body
        const query = {
            text: `INSERT INTO webpageinquiries (fname, email, lead_source) VALUES ($1,$2,$3)`,
            values: [r.fname, r.email, r.message],
        }
        dbConn
            .query(query)
            .then(row => {
                Log.info({ message: query })
                this.emailRequester()
            })
            .catch(error => Log.error({ message: error.stack }))
    }

    emailRequester = () => {
        Email(this.inputs)
        this.respond(this.res, { message: 'emailed requester' }, true, {
            success: "Thank you, we'll be in touch",
        })
    }
}

export default RequestConsult
