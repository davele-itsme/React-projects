import React, { Component } from 'react';
import '../css/App.css';
import About from './About';
import Skills from './Skills';
import ContactMe from './ContactMe';

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      myName: "hello"
    }
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                { this.state.myName }
                <About />
                <Skills />
                <ContactMe />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
