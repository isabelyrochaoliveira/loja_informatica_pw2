# Nexus Tech - Artigos de Informática

Aplicação web desenvolvida em React para gerenciamento e catálogo de produtos de uma loja de informática, organizada por seções dinâmicas e marcas.

Projeto desenvolvido para a 1ª Avaliação Prática da disciplina de Programação para a Web II (PRW2) do Instituto Federal de São Paulo (IFSP) - Câmpus São Carlos.

---

## Funcionalidades

* Cadastro de produtos com seleção de seção, marca, nome, preço e condição (Novo ou Usado).
* Renderização condicional de seções: a área de cada categoria só é exibida na tela caso contenha ao menos um produto cadastrado.
* Exibição em cards com logos locais correspondentes a cada fabricante.
* Remoção individual de itens diretamente pelo card do produto.
* Formatação de valores numéricos para a moeda brasileira (BRL).
* Formulário com limpeza automática dos estados após o envio.

---

## Seções e Marcas

* **Seções da Loja:** Acessórios, Computadores, Games, Impressoras e Gadgets.
* **Marcas Disponíveis:** HP, Dell, Asus, Samsung e Apple.

---

## Tecnologias Utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS3

---

## Como Executar o Projeto Localmente

1. Clone o repositório:
```bash
git clone https://github.com/isabelyrochaoliveira/loja_informatica_pw2.git
```

2. Acesse o diretório do projeto:
```bash
cd loja_informatica_pw2
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador no endereço indicado pelo terminal (geralmente ```http://localhost:5173```).

---

## Deploy

O projeto está publicado e acessível no ambiente de produção da Vercel: ```https://loja-informatica-pw2.vercel.app/```
