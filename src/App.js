import logo from './logo.svg';
import React from "react";
import ReactDom from "react-dom";
import './App.css';
import lib from "./lib";

const Display = () => (
  <div id="display">
    <h1>Drumpad</h1>
    <div id="current" class="screen">
      <p id="label"></p>
    </div>
  </div>
);
class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.hitPlay = this.hitPlay.bind(this);
  }
  componentDidMount() {
    window.addEventListener("keypress", this.handleKeypress);
  }
  componentWillUnmount() {
    window.removeEventListener("keypress", this.handleKeypress);
  }
  handleKeypress = (ev) => {
    // alert(ev.key);
    // ev.preventDefault()
    let k = ev.key.toUpperCase();
    // let idx = key_array.indexOf(k);
    // let btn = document.getElementById('button_1' + idx.toString())
    let aud = document.getElementById(k);
    aud.play();
    aud.currentTime = 0;
    // btn.click();
  };
  hitPlay() {
    let sound = document.getElementById(this.props.note);
    sound.play();
    sound.currentTime = 0;
    document.getElementById("label").innerHTML = this.props.label;
  }
  render() {
    return (
      <button
        id={this.props.id}
        className="drum-pad"
        onMouseDown={this.hitPlay}
        // onKeyDown={(ev) => this.handleKeypress(ev)}
      >
        {this.props.note}
        <audio
          id={this.props.note}
          src={this.props.waveSource}
          className="clip"
        ></audio>
      </button>
    );
  }
}

function App() {
  return (
    <div id="drum-machine">
      <Display />
      <div className="pads-grid">
        {lib.map((x) => (
          <Pad
            id={"button_" + lib.indexOf(x).toString()}
            note={x.key}
            key={lib.indexOf(x)}
            waveSource={x.url}
            label={x.label}
          />
        ))}
      </div>
    </div>
  

  );
}

export default App;
