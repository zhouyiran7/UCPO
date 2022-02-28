const doc = require('./选修课程/管理概论/555.json');
console.log(doc[0])
for (let i = 0; i < doc.length; i++) {
  console.log('----');
  const request = doc[i].request.body.text;
  let textUrl = 'http://www.baidu.com/' + request;
  const url = new URL(textUrl);
  const uRLSearchParams = new URLSearchParams(textUrl);
  const content = uRLSearchParams.get('Text');
  console.log(content);
}