const queryString = require('querystring');
const myBrain = require('./myBrain');
const myData = require('./twitterDonKim');

let trainedNet = myBrain.train(myData.trainingData);

function sleep(millisec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec);//new를 써야 초기화를 해준다?
}

function execute(input) {//PostData를 input으로 받아들임
    let result = myBrain.getResult(trainedNet, input);
    let output = result.trump > result.kardashian ? 'Trump' : 'Kardashian';
    console.log('trump = ' + Math.round(result.trump*100) + '%, kardashian = ' + Math.round(result.kardashian*100) + '%');
    let trim = ('trump = ' + Math.round(result.trump*100) + '%, kardashian = ' + Math.round(result.kardashian*100) + '%');//결과에 확률까지 나온다.
    return output, trim;
}


function start(res) {
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '문장 입력.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="myName" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();

    // res.writeHead(200,{'Content-Type' : 'text/html'});
    // res.write('Hello, start!');
    // res.end();
}

function hello(res, postData) {
    // //sleep(20000);//20초
    // setTimeout(function () {//기다리는중에도 접근이 가능함

    // res.writeHead(200,{'Content-Type' : 'text/html'});
    // res.write('Hello, hello!');
    // res.end();
    // }, 20000);
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '문장: ' + queryString.parse(postData).myName +
        '</br>결과 :'+ execute(postData)+//excute함수실행에 postData를 input으로 받음

        '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}


exports.start = start;
exports.hello = hello;