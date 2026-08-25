import { useState } from 'react';
import './formulario.css';
import CampoTexto from '../campoTexto/campoTexto';
import ListaSuspensa from '../listaSuspensa/listaSuspensa';
import Botao from '../botao/botao';

const Formulario = (props) => {
  const [secao, setSecao] = useState(props.secoes[0]);
  const [marca, setMarca] = useState(props.marcas[0]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [condicao, setCondicao] = useState('Novo');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProdutoCadastrado({
      secao,
      marca,
      nome,
      preco,
      condicao
    });

    setNome('');
    setPreco('');
    setCondicao('Novo');
    setSecao(props.secoes[0]);
    setMarca(props.marcas[0]);
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>

        <ListaSuspensa
          label="Seção:"
          itens={props.secoes}
          valor={secao}
          aoAlterado={(valor) => setSecao(valor)}
        />

        <ListaSuspensa
          label="Marca:"
          itens={props.marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />

        <CampoTexto
          label="Nome:"
          placeholder="Digite o nome do produto"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
        />

        <CampoTexto
          label="Preço (R$):"
          placeholder="Digite o preço"
          valor={preco}
          aoAlterado={(valor) => setPreco(valor)}
          obrigatorio={true}
        />

        <div className="campo-condicao">
          <label>
            <input
              type="radio"
              name="condicao"
              value="Novo"
              checked={condicao === 'Novo'}
              onChange={(e) => setCondicao(e.target.value)}
            />
            Novo
          </label>
          <label>
            <input
              type="radio"
              name="condicao"
              value="Usado"
              checked={condicao === 'Usado'}
              onChange={(e) => setCondicao(e.target.value)}
            />
            Usado
          </label>
        </div>

        <Botao>INSERIR PRODUTO</Botao>
      </form>
    </section>
  );
};

export default Formulario;