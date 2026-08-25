import './rodape.css';

const Rodape = () => {
  return (
    <footer className="rodape">
      <p>Desenvolvido por Isabely Rocha para a disciplina de Programação Web II</p>
      <p>&copy; {new Date().getFullYear()} Nexus Tech - Artigos de Informática</p>
    </footer>
  );
};

export default Rodape;