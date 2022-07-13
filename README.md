# Usar atribuição de desestruturação com o parâmetro rest para reatribuir elementos de array🏴

### Use atribuição de desestruturação com o parâmetro rest para executar Array.prototype.slice() de forma eficaz para que arr seja um sub array do array original source com os dois primeiros elementos omitidos.

`RESULTADO EM index.js`

# Tests 🏴

- > #### arr deve ser [3,4,5,6,7,8,9,10]✅
- > #### source deve ser [1,2,3,4,5,6,7,8,9,10]✅
- > #### Array.slice() não deve ser usado.✅
- > #### Desestruturação na list deve ser usada.✅

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-mqvbon)

### Link do exercicio : `https://www.freecodecamp.org/portuguese/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements `

###### _RESULTADO_ : teste bastante simples, nescessario apenas omitir os 2 primeiros numeros , entao vamos entregar `[, , ...arr]` para a variavel `source` .
