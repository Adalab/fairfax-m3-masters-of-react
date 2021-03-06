import React from 'react';

class SocialMedia extends React.Component {
    render() {
        return (
            <li className={`contact__list--rrss ${this.props.aditionalClass} border__medium`}>
                <a
                    href={this.props.href}
                    className={`${this.props.classLink} txt__dark`}
                    title=''
                    id='linkMobile'
                    target={this.props.target}
                    rel='noopener noreferrer'
                >
                    <i className={`contact__list--icon ${this.props.iconSocialMedia}`} />
                </a>
            </li>
        );
    }
}

export default SocialMedia;