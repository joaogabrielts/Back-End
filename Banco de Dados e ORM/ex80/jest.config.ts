/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  testMatch: ["**/__tests__/(units|integrations)/**/*.[jt]s?(x)"],
 
};

 /*
  reset - selecione o "preset" de execução dos testes, neste caso, estaremos utilizando o ts-jest.

testEnvironment - seleciona o ambiente de teste, neste caso, a seleção mais apropriada para as nossas aplicações é "node".

testMatch - é opcional e define o diretório de testes.
   */

/*
npm install -D jest @types/jest
npm install -D ts-jest
npx ts-jest config:init
 
json
"test": "jest --verbose --runInBand"

verbose: fornece informações mais completas sobre os testes, principalmente em circunstâncias de erro.

runInBand: executa todos os testes do processo atual serialmente, ao invés de criar um conjunto de trabalhadores de processos filhos que executam os testes. Pode ser útil para depuração.
 */
