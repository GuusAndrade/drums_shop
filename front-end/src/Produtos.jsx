import React, { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    valor: "",
    disponivel: true,
  });

  // Função para buscar produtos
  useEffect(() => {
    fetch("http://127.0.0.1:5000/produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  // Função para adicionar produto
  const adicionarProduto = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto),
    });

    if (response.ok) {
      const produtoCriado = await response.json();
      setProdutos([...produtos, { id: produtoCriado.id, ...novoProduto }]);
      setNovoProduto({ nome: "", descricao: "", valor: "", disponivel: true });
    } else {
      console.error("Erro ao adicionar produto");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-8">Cadastro de Produtos</h1>

      
      <form onSubmit={adicionarProduto} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-lg font-medium text-gray-700">Nome do Produto</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            value={novoProduto.nome}
            onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="descricao" className="block text-lg font-medium text-gray-700">Descrição</label>
          <input
            id="descricao"
            type="text"
            placeholder="Descrição"
            value={novoProduto.descricao}
            onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="valor" className="block text-lg font-medium text-gray-700">Valor</label>
          <input
            id="valor"
            type="number"
            placeholder="R$ 0,00"
            value={novoProduto.valor}
            onChange={(e) => setNovoProduto({ ...novoProduto, valor: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Adicionar Produto
          </button>
        </div>
      </form>

    
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">Produtos Cadastrados</h2>
        <ul className="mt-4 space-y-4">
          {produtos.length === 0 ? (
            <p className="text-gray-500">Não há produtos para exibir.</p>
          ) : (
            produtos.map((produto) => (
              <li
                key={produto.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <strong className="text-xl text-gray-800">{produto.nome}</strong>
                    <p className="text-gray-500">{produto.descricao}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-700">R$ {produto.valor}</p>
                  </div>
                  <span
                    className={`inline-block text-sm py-1 px-3 rounded-full ${
                      produto.disponivel ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {produto.disponivel ? "Disponível" : "Indisponível"}
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Produtos;
