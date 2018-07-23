import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const ABOUT_ME = 'About Me';
const CONTACT_DETAILS = 'Contact Details';
const PROFILE_PIC = 'Profile Pic';
const IMAGES_DIR = 'images';

export default class About extends PureComponent {
    static propTypes = {
        data: PropTypes.object,
    };

    static defaultProps = {
        data: {
            fullName: '',
            image: '',
            bio: '',
            email: '',
            portfolio: '',
        },
    };

    render() {
        const { data } = this.props;
        const { fullName, image, bio, email, portfolio } = data;

        const profilePic = image ? `${IMAGES_DIR}/${image}` : '';

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilePic} alt={PROFILE_PIC} />
                    </div>
                    <div className="nine columns main-col">
                        <h2>
                            {ABOUT_ME}
                        </h2>
                        <p>
                            {bio}
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>
                                    {CONTACT_DETAILS}
                                </h2>
                                <p className="address">
                                    <span>
                                        {fullName}
                                    </span>
                                    <br />
                                    <span>
                                        {email}
                                    </span>
                                    <br />
                                    <a href={portfolio}>
                                        {portfolio}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
