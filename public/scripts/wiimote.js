/**
 * Created with JetBrains WebStorm.
 * User: paulcampbell
 * Date: 03/04/2013
 * Time: 21:21
 * To change this template use File | Settings | File Templates.
 */
window.addEventListener('deviceorientation', onDeviceOrientationChange, false);

var socket = io.connect('http://localhost:2999');
var lastOrientation = {};

function onDeviceOrientationChange(event) {
     lastOrientation.gamma = event.gamma;
     lastOrientation.beta = event.beta;
     if (event.webkitCompassHeading != undefined) {
         lastOrientation.currentHeading = (360 - event.webkitCompassHeading);
     } else if (event.alpha != null) {
         lastOrientation.currentHeading =  (270 - event.alpha) * -1;
     } else {
         lastOrientation.currentHeading = null;
     }
     socket.emit('wiInput', { my: lastOrientation });
};

