require('dotenv').config({path: __dirname + '/.env' })
ENV = process.env
APP_PATH = __dirname;

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
