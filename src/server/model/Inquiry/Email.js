import nodemailer from 'nodemailer'
import Log from 'ServerUtil/Log'

const Email = formData => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: process.env.NODE_ENV === 'production', // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_ADDR,
            pass: process.env.EMAIL_PW,
        },
    })
    const body = `New email from landing page: <br/><br/>
    Name: ${formData.fname}.<br/>
    Email: ${formData.email}. <br/>
    Message: ${formData.message} `
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Appreciate Landing Page" <joseph@appreciateco.com>', // sender address
        to: '"Joseph Plaugher" <joseph@appreciateco.com>', // recipient
        subject: `New email from landing page:`, // Subject line
        text: body, // plain text body
        html: '<p>' + body + '</p>', // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            Log.error({ message: error.stack })
        } else {
            Log.info({ message: info })
        }
    })
}

export default Email
