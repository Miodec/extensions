"use strict";
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
exports.complete = () => {
    console.log("Completed mod execution");
};
exports.error = (err) => {
    console.error("Error sending message to Slack", err);
};
exports.init = () => {
    console.log("Initialising mod with configuration", config_1.default);
};
exports.messageSending = (url) => {
    console.log(`Sending message to Slack URL: '${url}'`);
};
exports.messageSent = (url) => {
    console.log(`Sent message to Slack URL: '${url}'`);
};
exports.start = () => {
    console.log("Started mod execution with configuration", config_1.default);
};
