class BaseClass {
    constructor() {
        this.error = []
        this.response
    }

    setError = (error) => {
        this.error.push(error);
    }

    getError = () => {
        return this.error;
    }

    respond = (res, data, success, userNotify) => {
        res.status(200).json({
            data: data,
            success: success,
            userNotify: userNotify
        });
    }
}

export default BaseClass