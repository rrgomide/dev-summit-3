/**
 * Preferi não utilizar a função abaixo
 * por uma questão de simplificação da
 * aula. De qualquer forma, a função
 * abaixo pode ser utilizada para "forçar"
 * uma lentidão em execuções
 */
export function helperSlowFunction(functionToExecute, iterations = 1_000) {
  for (let i = 0; i < iterations; i++) {
    console.log(i);
  }

  return functionToExecute();
}
