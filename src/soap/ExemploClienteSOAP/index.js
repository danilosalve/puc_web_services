const soap = require('soap');
const url = 'http://dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function(err, client) {
    console.log('Descrever o WSDL', client.describe().Calculator.CalculatorSoap );

    client.Add({intA: 19, intB: 21}, function (err, result){
        if (err) {
            console.error(err);
        } else {
            console.info('O resultado da soma é: ', result.AddResult);
        }
    });
    
    client.Subtract({intA: 20, intB: 2}, function (err, result){
        if (err) {
            console.error(err);
        } else {
            console.info('O resultado da subtração é: ', result.SubtractResult);
        }
    });

    client.Multiply({intA: 23, intB: 2}, function (err, result){
        if (err) {
            console.error(err);
        } else {
            console.info('O resultado da multiplicação é: ', result.MultiplyResult);
        }
    });

    client.Divide({intA: 795, intB: 2}, function (err, result){
        if (err) {
            console.error(err);
        } else {
            console.info('O resultado da divisão é: ', result.DivideResult);
        }
    });
});