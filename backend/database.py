from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)

# Iniciando o db
db = SQLAlchemy()

class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.String(255), nullable=False)
    valor = db.Column(db.Float, nullable=False)
    disponivel = db.Column(db.Boolean, nullable=False)

