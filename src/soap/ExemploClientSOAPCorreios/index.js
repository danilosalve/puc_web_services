var soap = require('soap');
var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function(err, res) {
    console.log('Descrever o WSDL', res.describe().AtendeClienteService.AtendeClientePort );

    res.consultaCEP({cep: '05175340'}, function (err, res){
        if (err) {
            console.error('Ops, ocorreu um erro => ', err);
        } else {
            console.info('Sucesso ao consulta CEP', res);
        }
    });
});