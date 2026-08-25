import './rodape.css';

const Rodape = () => {
  return (
    <footer className="rodape">
      <p>Desenvolvido para a disciplina de Programação para a Web II</p>
      <p>&copy; {new Date().getFullYear()} Nexus Tech - Artigos de Informática</p>
    </footer>
  );
};

export default Rodape;