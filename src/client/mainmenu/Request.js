import { FormClass, Input, TextArea, Button } from 'reactform-appco'
import React from 'react'
import LightBox from 'Util/LightBox'
import EB from 'Util/EB'
import SetUrl from 'Util/SetUrl'
import ValRules from './ValRules'
import 'scss/form.scss'

class Request extends FormClass {
    constructor(props) {
        super(props)
        this.useLiveSearch = false
        this.route = SetUrl() + '/requestConsult'
        this.valRules = ValRules
        this.state = {
            showForm: false,
            fname: '',
            email: '',
            formData: {
                fname: '',
                email: '',
                message: '',
            },
            userNotify: {
                success: '',
                fnam: '',
                email: '',
                message: '',
            },
        }

        this.response = this.response.bind(this)
        this.closeLightBox = this.closeLightBox.bind(this)
        this.openLightBox = this.openLightBox.bind(this)
    }

    response = res => {
        if (res.data.success) {
            this.setState({
                userNotify: res.data.userNotify,
            })
        } else {
            console.error('submit error: ', res.error)
        }
    }

    closeLightBox = () => {
        this.setState({ showForm: false })
    }

    openLightBox = () => {
        this.setState({ showForm: true })
    }

    render() {
        return (
            <>
                <button id="request-info-button" onClick={this.openLightBox}>
                    Request a free consultation
                </button>

                {this.state.showForm ? (
                    <div
                        id="lightbox-container"
                        className="lightbox-background"
                    >
                        <LightBox close={this.closeLightBox}>
                            <p className="formTitle">Request Consultation</p>
                            <form onSubmit={this.rfa_onSubmit}>
                                <Input
                                    name="fname"
                                    label="First Name"
                                    value={this.state.fname}
                                    onChange={this.rfa_onChange}
                                    error={this.state.userNotify.fname}
                                />
                                <br />
                                <Input
                                    name="email"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.rfa_onChange}
                                    error={this.state.userNotify.email}
                                />
                                <br />
                                <TextArea
                                    name="message"
                                    label="What brought you here?"
                                    rows={5}
                                    cols={25}
                                    value={this.state.message}
                                    onChange={this.rfa_onChange}
                                    error={this.state.userNotify.message}
                                />
                                <div className="buttondiv">
                                    <Button
                                        id="submit"
                                        value="Request Consultation"
                                    />
                                </div>
                            </form>
                            <p className="userNotify-success">
                                {this.state.userNotify.success}
                            </p>
                        </LightBox>
                    </div>
                ) : null}
            </>
        )
    }
}

export default Request
