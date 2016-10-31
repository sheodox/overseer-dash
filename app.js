var config = require('./config'),
    dash_button = require('node-dash-button'),
    socket = require('socket.io-client')(config.overseerServer);

config.buttons.forEach(button => {
    let dash = dash_button(button.mac, null, null, 'all');

    dash.on('detected', () => {
        socket.emit('lights/toggle', button.groupId);
    })
});

console.log(`Listening for ${config.buttons.length} buttons!`);