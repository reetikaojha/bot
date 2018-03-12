#!/usr/bin/env
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('dotenv').config({silent: true});

var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

server.listen(port, function() {
  // eslint-disable-next-line
  console.log('Server running on port: %d', port);
});

server.get('/webhook/', function (req, res) {
 
  res.sendStatus(200)
})

const token ='EAAE5t3pwPcUBAF2PylCI0wkBm4ZBCt3aZBXXmLR1qH8z8Rr4dilQDvuCMH1wqS5ydarlZCidnzE6NLalX00YDbnnwpYC1OEr2ndNr7ti2OHSrfGLM6gRqnXwZBu7R59IRIGFahUnnK4o6viWZA4U11ZAU11fOFjGvb0AnCrpeY3QZDZD'
