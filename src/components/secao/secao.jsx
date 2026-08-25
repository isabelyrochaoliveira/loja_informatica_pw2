import './secao.css';
import CardProduto from '../cardProduto/cardProduto';

const Secao = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return (
    props.produtos.length > 0 && (
      <section className="secao" style={corDeFundo}>
        <h3 style={corSublinhado}>{props.nome}</h3>
        <div className="produtos-grid">
          {props.produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              condicao={produto.condicao}
              marca={produto.marca}
              corFundo={props.corPrimaria}
              aoDeletar={props.aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Secao;