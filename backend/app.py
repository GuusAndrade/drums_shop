from flask import Flask, request, jsonify
from flask_cors import CORS
from database import db, Produto 

app = Flask(__name__)
CORS(app)

# Configuração do banco de dados SQLite
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Registrando a instância do app com o db
db.init_app(app)

# Criar as tabelas no Banco de dados
with app.app_context():
    db.create_all()

# Rota para adicionar um novo produto
@app.route("/produtos", methods=["POST"])
def adicionar_produto():
    data = request.json
    novo_produto = Produto(
        nome = data ["nome"],
        descricao = data ["descricao"],
        valor = data ["valor"],
        disponivel = data ["disponivel"],
    )
    db.session.add(novo_produto)
    db.session.commit()
    return jsonify({"id": novo_produto.id, "message": "Produto criado!"}), 201 

# Rota para listar todos os produtos
@app.route("/produtos", methods=["GET"])
def listar_produtos():
    produtos = Produto.query.order_by(Produto.valor).all() # ordenando pelo campo "valor"
    return jsonify(
        [{"id": p.id, "nome": p.nome, "descricao": p.descricao, "valor": p.valor, 
          "disponivel": p.disponivel} for p in produtos] # converte os produtos em uma lista de dicionarios e retorna como JSON.
    )

# Rota para obter um produto via ID
@app.route("/produtos/<int:id>", methods=["GET"])
def obter_produtos(id):
    produto = Produto.query.get(id)
    if produto:
        return jsonify({"id": produto.id, "nome": produto.nome, "descricao": produto.descricao,
                       "valor": produto.valor, "disponivel": produto.disponivel})
    return jsonify ({"message": "Produto não encontrado"}), 404
    
# Rota para atualizar um produto
@app.route("/produtos/<int:id>", methods=["PUT"])
def atualizar_produto(id):
    produto = Produto.query.get(id)
    if produto:
        data = request.json
        produto.nome = data ["nome"]
        produto.descricao = data ["descricao"]
        produto.valor = data ["valor"]
        produto.disponivel = data ["disponivel"]
        db.session.commit()
        return jsonify ({"message": "Produto Atualizado!"})
    return jsonify ({"message": "Produto não identificado"}), 404

# Rota para deletar um produto
@app.route("/produtos/<int:id>", methods=["DELETE"])
def deletar_produto(id):
    produto = Produto.query.get(id)
    if produto:
        db.session.delete(produto)
        db.session.commit()
        return jsonify({"message": "Produto deletado com sucesso!"})
    return jsonify ({"message": "Produto não identificado"}), 404


# Iniciando o server
if __name__ == "__main__":
    app.run(debug=True)
        




