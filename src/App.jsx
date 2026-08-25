import { useState } from 'react';
import Banner from './components/banner/banner';
import Formulario from './components/formulario/formulario';
import Secao from './components/secao/secao';
import Rodape from './components/rodape/rodape';

function App() {
  const secoes = [
    {
      nome: 'Acessórios',
      corPrimaria: '#2575fc',
      corSecundaria: '#e8f0fe'
    },
    {
      nome: 'Computadores',
      corPrimaria: '#00d2d3',
      corSecundaria: '#e0f7f8'
    },
    {
      nome: 'Games',
      corPrimaria: '#8a2be2',
      corSecundaria: '#f3e8ff'
    },
    {
      nome: 'Impressoras',
      corPrimaria: '#64748b',
      corSecundaria: '#f1f5f9'
    },
    {
      nome: 'Gadgets',
      corPrimaria: '#4f46e5',
      corSecundaria: '#eef2ff'
    }
  ];

  const marcas = [
    'HP',
    'Dell',
    'Asus',
    'Samsung',
    'Apple'
  ];

  const [produtos, setProdutos] = useState([]);

  const adicionaProduto = (produto) => {
    setProdutos([...produtos, { ...produto, id: crypto.randomUUID() }]);
  };

  const deletarProduto = (id) => {
    setProdutos(produtos.filter((p) => p.id !== id));
  };

  const listaNomesSecoes = secoes.map((s) => s.nome);

  return (
    <div>
      <Banner />
      <Formulario
        secoes={listaNomesSecoes}
        marcas={marcas}
        aoProdutoCadastrado={(produto) => adicionaProduto(produto)}
      />

      {produtos.length === 0 && (
        <div style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
          <p>Nenhum produto cadastrado no catálogo ainda.</p>
        </div>
      )}

      {secoes.map((secao) => (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter((p) => p.secao === secao.nome)}
          aoDeletar={deletarProduto}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;