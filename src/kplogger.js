
let logLength = 10;
let logData = [];
let recording = false;

let logTimeSpread = 50;
let lastLogTime = 0;

const recordButton = document.getElementById('reckp');
const recordLog = document.getElementById('kplog');

recordButton.onclick = ev => {
  recording = !recording; // toggle recording
}

export default function logKeypoints(pointsData) {
  if (logLength > 0 && recording) {
    // Do not log empty pointsData
    if (pointsData.lenght > 0) return;
    // Do not log data points to soon
    if (lastLogTime + logTimeSpread > Date.now()) return;
    // Log
    logLength--;
    logData.push(pointsData);
    lastLogTime = Date.now();
  }
  else if (logLength <= 0) {
    // crear un elemento para guardar la data del log
    //console.log(logData);
    recordLog.innerText = JSON.stringify(logData);
    recording = false;
    alert('finished!');
  }
}
