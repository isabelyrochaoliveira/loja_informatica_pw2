import './cardProduto.css';

const imagensMarcas = {
  'HP': '/imgs/hp.jpg',
  'Dell': '/imgs/dell.jpg',
  'Asus': '/imgs/asus.jpg',
  'Samsung': '/imgs/samsung.jpg',
  'Apple': '/imgs/apple.jpg'
};

const CardProduto = ({ id, nome, preco, condicao, marca, corFundo, aoDeletar }) => {
  const logo = imagensMarcas[marca] || '/imgs/hp.jpg';

  const precoFormatado = Number(preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <div className="card-produto">
      <button 
        className="botao-deletar" 
        onClick={() => aoDeletar(id)}
        title="Remover produto"
      >
        &times;
      </button>

      <div className="cabecalho-card" style={{ backgroundColor: corFundo }}>
        <img src={logo} alt={marca} />
      </div>
      <div className="rodape-card">
        <h4>{nome}</h4>
        <h5>{isNaN(Number(preco)) ? `R$ ${preco}` : precoFormatado}</h5>
        <span className={`tag-condicao ${condicao.toLowerCase()}`}>
          {condicao.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default CardProduto;