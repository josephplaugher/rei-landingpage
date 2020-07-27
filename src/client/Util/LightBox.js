import React from 'react';
import 'scss/lightbox.scss'
import 'scss/form.scss'

class LightBox extends React.Component {
    render() {
        
        return (
            <>
            <div className="lightbox-foundation">
            {/*this div intentionally empty. Allows the light box content to scroll */}     
            </div> 
            <div className="lightbox-background">
                <div className="lightbox">
                <span className="close" onClick={this.props.close}>x</span>
                {this.props.children} {/*there must be nested markup components passed in*/}
                </div>
            </div>
            </>
        )
    };
}

export default LightBox;