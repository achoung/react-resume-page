import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const COPYRIGHT = 'Copyright 2018 Andrew Choung';

export default class Footer extends PureComponent {
    static propTypes = {
        data: PropTypes.object,
    };

    static defaultProps = {
        data: {
            social: [],
        },
    };

    render() {
        const { data } = this.props;
        const { social } = data;

        // iterate and format the network buttons
        let networks = null;
        if (Array.isArray(social)) {
            networks = social.map((network) => {
                const { name, url, className } = network;
                return (
                    <li key={name}>
                        <a href={url}>
                            <i className={className} />
                        </a>
                    </li>
                );
            });
        }

        /* eslint-disable react/jsx-one-expression-per-line */
        const copyright = (
            <span>&copy;{COPYRIGHT}</span>
        );
        /* eslint-enable react/jsx-one-expression-per-line */

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>
                        <ul className="copyright">
                            <li>
                                {copyright}
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
