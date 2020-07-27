const ValRules = {
    settings: {
        mode: process.env.NODE_ENV,
        log: {
            dev: function(data) {
                console.log(data)
            },
            prod: function(data) {
                return null
            },
        },
    },
    rules: [
        {
            name: 'fname',
            required: true,
            alphanumeric: 'true',
            errorMsg: 'Your name is required',
        },
        {
            name: 'email',
            required: true,
            email: true,
            errorMsg: 'Must provide a valid email address',
        },
        {
            name: 'message',
            required: true,
            alphanumeric: true,
            errorMsg: 'Please tell us a little about your business needs',
        },
    ],
}

export default ValRules
