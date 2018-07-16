'use strict';

process.env['DEBUG'] = 'nightmare'; // for electron logging

const southwestCheckin = require('./checkin');
southwestCheckin('ABC123');
