import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const SHOW_NAVIGATION = 'Show navigation';
const HIDE_NAVIGATION = 'Hide navigation';

const HOME = 'Home';
const ABOUT = 'About';
const RESUME = 'Resume';

export default class Header extends PureComponent {
    static propTypes = {
        data: PropTypes.object,
    };

    static defaultProps = {
        data: {
            headerMessage: '',
            subtitleMessage: '',
            name: '',
            image: '',
            bio: '',
            email: '',
            social: [],
        },
    };

    render() {
        const { data } = this.props;
        const { social, headerMessage, subtitleMessage } = data;

        // iterate and format the network buttons
        let networks = null;
        if (Array.isArray(social)) {
            networks = social.map((network) => {
                const { name: networkName, url, className } = network;
                return (
                    <li key={networkName}>
                        <a href={url}>
                            <i className={className} />
                        </a>
                    </li>
                );
            });
        }

        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        {SHOW_NAVIGATION}
                    </a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">
                        {HIDE_NAVIGATION}
                    </a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                {HOME}
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                {ABOUT}
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                {RESUME}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            {headerMessage}
                        </h1>
                        <h3>
                            {subtitleMessage}
                        </h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle" />
                    </a>
                </p>
            </header>
        );
    }
}
