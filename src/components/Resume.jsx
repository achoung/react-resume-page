import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const EXPERIENCE = 'Experience';
const EDUCATION = 'Education';

class Resume extends PureComponent {
    static propTypes = {
        data: PropTypes.object,
    };

    static defaultProps = {
        data: {
            education: [],
            work: [],
        },
    };

    renderEducation() {
        const { data: { education } } = this.props;

        /* eslint-disable react/jsx-one-expression-per-line */
        const bulletSymbol = (
            <span>
                &bull;
            </span>
        );
        /* eslint-enable react/jsx-one-expression-per-line */

        return education.map((educationType) => {
            const { school, degree, graduated } = educationType;

            return (
                <div key={`${school}`}>
                    <h3>
                        {school}
                    </h3>
                    <p className="info">
                        {degree}
                        {bulletSymbol}
                        <em className="date">
                            {graduated}
                        </em>
                    </p>
                </div>
            );
        });
    }

    renderWork() {
        const { data: { work } } = this.props;

        /* eslint-disable react/jsx-one-expression-per-line */
        const bulletSymbol = (
            <span>
                &bull;
            </span>
        );
        /* eslint-enable react/jsx-one-expression-per-line */

        return work.map((workType) => {
            const { description, company, title, years } = workType;

            const descriptionList = Array.isArray(description) ? description : [description];
            const renderedWorkDescription = descriptionList.map((descriptionType) => {
                const descriptionKey = `${workType}_${descriptionType}`;
                return (
                    <li key={descriptionKey}>
                        {descriptionType}
                    </li>
                );
            });

            return (
                <div key={`${company}_${title}`}>
                    <h3>
                        {company}
                    </h3>
                    <p className="info">
                        {title}
                        {bulletSymbol}
                        <em className="date">
                            {years}
                        </em>
                    </p>
                    <ul>
                        {renderedWorkDescription}
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>
                                {EXPERIENCE}
                            </span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        {this.renderWork()}
                    </div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>
                                {EDUCATION}
                            </span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {this.renderEducation()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
