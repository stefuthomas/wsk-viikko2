'use strict';

const div = document.getElementById('target');

const browserNameVersion = document.createElement('p');
browserNameVersion.innerText = 'Browser information: ' + navigator.vendor + ' ' + navigator.appVersion;
div.appendChild(browserNameVersion);

const operatingSystem = document.createElement('p');
operatingSystem.innerText = 'Operating system: ' + navigator.platform;
div.appendChild(operatingSystem);

const resolution = document.createElement('p');
resolution.innerText = 'Screen resolution: width: ' + screen.width + ' height: ' +  screen.height;
div.appendChild(resolution);

const date = new Date();
const formattedDate = date.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const dateElement = document.createElement('p');
dateElement.innerText = 'Date: ' + formattedDate;
div.appendChild(dateElement);

const time = new Date();
const formattedTime = time.toLocaleTimeString('fi-FI', {
  hour: 'numeric',
  minute: 'numeric'
});

const timeElement = document.createElement('p');
timeElement.innerText = 'Time: ' + formattedTime;
div.appendChild(timeElement);
