import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: {},
        };

        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    }

    componentDidMount() {
        this.getResumeData();
    }

    getResumeData() {
        $.ajax({
            url: 'data/resumeData.json',
            dataType: 'json',
            cache: false,
            success: data => this.setState({ resumeData: data }),
            error: (xhr, status, err) => console.error(err),
        });
    }

    render() {
        const { resumeData: { main, resume } } = this.state;
        return (
            <div className="App">
                <Header data={main} />
                <About data={main} />
                <Resume data={resume} />
                <Footer data={main} />
            </div>
        );
    }
}

export default App;
