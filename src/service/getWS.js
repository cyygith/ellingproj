import createClient  from 'soap';

var url = 'http://localhost:8080/checkservice/service/helloWord?wsdl';
var args = {name: 'elling'};
var soapClient = function () {
  createClient(url, function (err, client) {
    client.sayHello(args, function (err, result) {
      console.log('err:' + err)
      console.log('result:' + result.return)
      console.dir(result)
    })
  })
}

