let express = require('express');
let cors = require('cors');
let app = express();
let engines = require('consolidate');
let path = require('path');
let logger = require('morgan');

// router 설정
let indexRouter = require('./routes/index');
let testRouter = require('./routes/test');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 html로 설정
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
// app.use(express.static(path.join(__dirname + '/public')));
app.use('/public', express.static(path.join(__dirname + '/public')));

app.use('/', indexRouter);
app.use('/test', testRouter);

module.exports = app;