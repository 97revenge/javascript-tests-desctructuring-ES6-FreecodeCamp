const stats = {
  max: 56.78,
  standart_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  avegare: 35.85,
};

const { max, min } = stats; // ppela minha leitura , essa linha é importante porque aqui eu estou desestruturando realmente o objeto ...

const half = ({ max, min }) => {
  (max, min) / 2;
}; // e aqui eu estou passando a desestruturacao diretamente para os parametros da funcao anonima half .

console.log(half(max, min));

// BASE DE TESTES ANTIGOS :
// const half = (stats) => (stats.max, stats.min) / 2.0 ;

// const {max, min} = stats;

// // Altere apenas o código acima desta linha
