const key = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const labels = ["Mldy 2","Mldy 3","Mldy 4","Mldy 1","Clap","Crash","Snare+Hh","Kick","Cl-Hh"];
const sources = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
];

function Lib_Const(letter, label, url) {
  this.key = letter;
  this.label = label;
  this.url = url;
}

const lib = key.map((k) => {
  let i = key.indexOf(k);
  return new Lib_Const(key[i], labels[i], sources[i]);
});

export default lib;