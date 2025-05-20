# Curso de React Alura

Curso de
React: estilize componentes com Styled Components e manipule arquivos estáticos

![Capa Curso React](./capa-README.png)

## Rodar Projeto

`npm run dev`

Salva na porta 5173 por padrão

http://localhost:5173/

Editar o arquivo src/App.tsx

Vamos usar o https://styled-components.com/ (CSS in JS)

`npm install styled-components@latest`

Instalar extenção no VSCode: vscode-styled-compone

## Resetar CSS dos navegadores - Normalize CSS

Vamos usar o Normalize CSS para remover margens, padding, e configurações padrões que os navegadore aplicam por padrão.

https://necolas.github.io/normalize.css/

** Utilizamos o gist no github com os estilos do normalize CSS, porém sem os comentários: https://gist.github.com/viniciosneves/412099ad33e7974c2eed1df536f51bf8 

Criamos um componente com o estilo do resete e exportamos (createGlobalStyle). Importamos esse componente no App.tsx

## CSS-in-JS

<details>

  <summary>CSS-in-JS</summary>

  CSS-in-JS e SCSS são duas maneiras diferentes de lidar com estilos em sites.
  CSS-in-JS é quando escrevemos os estilos dentro do código JavaScript. Os estilos são tratados como objetos JavaScript e são aplicados ao HTML durante a execução do site. Com isso, podemos mudar os estilos de forma dinâmica com base no que está acontecendo no site. Também temos a vantagem de aplicar os estilos apenas aos componentes específicos em que queremos usá-los. Alguns exemplos populares de bibliotecas CSS-in-JS são styled-components e Emotion.

  Já o SCSS é uma extensão do CSS que adiciona alguns recursos legais, como variáveis, mixins e aninhamento de seletores. Com o SCSS, podemos escrever estilos de forma mais eficiente e reutilizável. A sintaxe é bem parecida com o CSS comum, mas com esses recursos extras. Porém, é importante lembrar que o SCSS precisa ser transformado em CSS antes de ser usado pelo navegador. Isso é feito usando ferramentas como Node.js e Sass.

  Resumindo, CSS-in-JS é quando escrevemos os estilos dentro do JavaScript, permitindo mais dinamismo e estilos específicos para cada componente. Já o SCSS é uma extensão do CSS que adiciona recursos avançados, mas precisa ser convertido em CSS antes de ser usado pelo navegador.
</details>

## Observações

O logo está na pasta public para manter uma URL da imagem amigável para o SEO