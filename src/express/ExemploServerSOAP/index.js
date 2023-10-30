const soap = require('soap');
const express = require('express');
const fs = require('fs');
// Definir que o meu serviço utiliza Express.
const PORT = 8001;
const app = express();

var myService = {
    ws: {
        calc: {
            somar: function(args) {
                var n = 1 * args.a + 1 * args.b;
                return { sumres: n}
            },
            multiplicar: function(args) {
                var n = 1 * args.a * 1 * args.b;
                return { mulres: n}
            }
        }
    }
}

const xml = fs.readFileSync('wscalc1.wsdl', 'utf8');

app.listen(PORT, function(){
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/wscalc1', myService, xml, function(){
        console.info(`O servidor foi iniciado na porta ${PORT}`)
    });
});