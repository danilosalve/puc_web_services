# PUC - Web Services
Este repositório armazena somente conteúdos referente ao curso de pós da graduação da universidade PUC-RS na aula de Web Services.

## API SOAP
### Calculadora
* Utilizar o pacote npm SOAP.
* Utilizar o WSDL: http://dneonline.com/calculator.asmx?wsdl

Como iniciar o servidor da API?
1. Acessar o diretorio ExemploClienteSOAP
```
cd src/soap/ExemploClienteSOAP
```

2. Execute o arquivo index.js

```
node index.js

ou 

node src/soap/ExemploClienteSOAP index.js
```

### Correios
* Utilizar o pacote npm SOAP.
* Utilizar o WSDL: https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl

Como iniciar o servidor da API?
1. Acessar o diretorio Hello
```
cd src/soap/ExemploClientSOAPCorreios
```

2. Execute o arquivo index.js

```
node index.js

ou 
node src/soap/ExemploClientSOAPCorreios/ index.js
```

Deve ser printado no console as informações das operações matematicas.

## API REST
### Hello Word
Como iniciar o servidor da API?
1. Acessar o diretorio Hello
```
cd src/node/Hello
```

2. Execute o arquivo index.js

```
node index.js
```

Ao acessar o navegador na url localhost:8080 será apresentado a mensagem hello word na tela.

## Express
Exemplo de um Servidor local utilizando a biblioteca Express.
* Utilizar a biblioteca Express.
* Utilizar a biblioteca SOAP.
* Utilizar um arquivo WSDL.

Como iniciar o servidor da API?
1. Acessar o diretorio Hello
```
cd src/express/ExemploServerSOAP
```

2. Execute o arquivo index.js

```
node index.js

ou 
node src/soap/ExemploServerSOAP/ index.js
```

Consumindo o servidor
```
node src/express/ExemploClientSOAP/ index.js
```