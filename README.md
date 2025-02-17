# Drum Shop

Este repositório contém a estrutura inicial do ```backend``` e ```frontend``` do projeto Drums Shop. 
O **Drum Shop** é uma plataforma para cadastro e listagem de produtos relacionados a baterias e percussão. O projeto visa fornecer uma interface simples e intuitiva para adicionar e visualizar produtos disponíveis.

## Requisitos
Os requisitos mínimos para a execução deste projeto são as bibliotecas ```flask```, ```flask_cors``` e ```flask_sqlalchemy```

### Flask 

O ```Flask``` é um microframework leve e flexível para o desenvolvimento de aplicações web em Python.

### Flask_cors

O ```flask_cors``` é uma extensão para o Flask que facilita a configuração de CORS (Cross-Origin Resource Sharing) em aplicações web. Ele permite que você controle quais origens podem acessar os recursos da sua API. 

### Flask_sqlalchemy

O ```Flask-SQLAlchemy``` é uma extensão para o Flask que adiciona suporte para trabalhar com bancos de dados relacionais usando SQLAlchemy.

## Passo-a-passo

### 1. Instalação Flask

Para iniciar, iremos realizar a instalação do microframework ```flask```, para isto, execute o seguinte comando:
```
pip install flask
```

### 2. Instalação Flask_cors

Agora, iremos realizar a instalação da extensão ```flask_cors```, para isto, execute o seguinte comando:
```
pip install flask_cors
```

### 3. Instalação Flask_sqlalchemy

Por fim, iremos realizar a instalação da extensão ```flask_sqlalchemy```, para isto, execute o seguinte comando:
```
pip install flask_sqlalchemy
```

## Executando o projeto

### Backend

1. Instale as dependências do backend:
```
pip install -r backend/requirements.txt
```

2. Inicie o servidor Flask:
```
python backend/app.py
```

Por padrão, o backend estará disponível em: `http://127.0.0.1:5000`.

### Frontend

1. Navegue até a pasta do frontend:
 ```
cd front-end
```

2. Instale as dependências do frontend:

```
npm install
```

3. Inicie o servidor de desenvolvimento:

```
npm run dev
```
O frontend estará disponível no navegador, geralmente em `http://localhost:3000`

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Add nova feature'`).
4. Faça push para a sua branch (`git push origin feature/nova-feature`).
5. Abra um pull request.


## Tecnologias Usadas

- **Backend**: Flask, Flask-CORS, Flask-SQLAlchemy
- **Frontend**: HTML, CSS, JavaScript, Tailwind
