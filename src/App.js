import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://placekitten.com/200/200', // You can replace this with the actual image source
        profession: 'Software Engineer',
      },
      show: false,
      intervalId: null,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);

    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div className="App">
        <h1>React Profile App</h1>
        <button onClick={this.handleToggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since last mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
