Neste módulo foi apresentado uma nova funcionalidades do React, os Hooks. 
Com ele podemos diminuir a verbosidade do código, eliminar o uso de classes e 
até mesmo aprimora o desempenho da aplicação. 
Os hooks apresentados foram o useState, useEffect, useCallback e useMemo. 

Exemplo do código desenvolvido no projeto 'react-hooks-examples'

```javascript
import REact, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    /*
    * Utilizando os Hooks, usamos um useState separado pra cada estado. 
    * O useState retorna um Array. Na premira posição ele retorna o próprio estado
    * e na segunda, retorna uma função para atualizar o estado. 
    * No exemplo a baixo usamos a desestruturação para pegar esses valores. 
    */
  const [newTech, setNewTech] = useState('');

  /*
   * O useCallback é utilizado para funções que são montadas toda vez que a página
   * é renderizada. 
   * Dessa forma, a função só é montada quando as variáveis passadas como segundo
   * parâmetro, forem alteradas. 
   */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  /* 
   * O useEffect é utilizado para substituir os métodos de ciclo de vida como
   * o 'componentDidMount' ou o 'componentDidUpdate'. 
   * O primeiro parâmetro que ele recebe é a função que vai ser executada e o 
   * segundo é quando que ela vai ser executada. 
   * Quando não informamos nenhuma variável no segundo parâmetro, ele executa 
   * apenas uma vez ao carregar a página. 
   */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  /*
   * Como useMemo, podemos criar funções que só atualizam quando uma determinada
   * variável for alterarada. 
   * Muito utilizada para funções que fazem cálculos complexos e que não deveriam
   * ser carregadas toda vez que a página for redenrizada. 
   */
  const techSize = useMemo(() => tech.length, [tech]);

  /* 
   * Passando a variável 'tech' no segundo parâmetro do useEffect faz com que 
   * essa função seja executada, toda vez que houver uma alteração em 'tech'. 
   */
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias.</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
``` 

Após a introdução dos hooks, refatoramos todos o código do projeto desenvolvido 
no módulo anterior usando os hooks e convertendo classes para funções. 
Também foi apresentado hooks junto com o redux. 