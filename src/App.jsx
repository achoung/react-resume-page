import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';

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
