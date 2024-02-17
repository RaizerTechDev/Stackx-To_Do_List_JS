// Declara uma variável 'todoList' que representa a lista de afazeres e a inicializa como uma array vazia
let todoList = [];

// Declara uma função 'addItem' para adicionar um novo item à lista de afazeres
function addItem(title) {
  // Adiciona um novo objeto à lista de afazeres, com a propriedade 'title' definida pelo parâmetro 'title' 
  //e a propriedade 'done' definida como como não concluído (falso)
  todoList.push({
    title: title, 
    done: false, 
  });}

// Declara uma função 'refreshUI' para atualizar a interface do usuário com os itens da lista de afazeres
function refreshUI() {
  // Declara uma variável para armazenar a marcação HTML que será gerada para exibir os itens da lista de afazeres
  let htmlData = "";

  // Declara uma variável 'idx' para rastrear o índice de cada item da lista de afazeres que será exibido na interface
  let idx = 1;

  // Inicia um loop para iterar sobre cada item da lista de afazeres
  for (let i in todoList) {
    // Declara uma variável 'item' para representar o item atual na iteração
    let item = todoList[i];

    // Declara uma variável 'checked' que armazena a string "checked" 
    //se o item estiver concluído (done=true), caso contrário, a string estará vazia
    let checked = item.done ? "checked" : "";

    // Gera a marcação HTML para exibir o item da lista de afazeres atual, incluindo um checkbox,
    //o título do item e um evento de clique
    htmlData += `
        <div>
            <label>
                <input type="checkbox" ${checked} onclick="this.checked ? doneClickHandler(${i}) : undoneClickHandler(${i})" name="done" value="${
      item.done
    }" />
                <span style="${
                  item.done ? "text-decoration: line-through" : ""
                }">
                ${idx}. ${item.title}
                </span>
            </label>
        </div>
        `;

    // Incrementa o índice para o próximo item
    idx++;
  }

  // Atualiza o conteúdo HTML do elemento com id "todoList" com a marcação gerada
  document.getElementById("todoList").innerHTML = htmlData;
}

// Declara uma função para lidar com o evento de clique em um checkbox marcando um item como concluído
function doneClickHandler(idx) {
  // Marca o item da lista de afazeres correspondente como concluído
  todoList[idx].done = true;
  // Atualiza a interface do usuário para refletir as mudanças
  refreshUI();
}

// Declara uma função para lidar com o evento de clique em um checkbox desmarcando um item como não concluído
function undoneClickHandler(idx) {
  // Marca o item da lista de afazeres correspondente como não concluído
  todoList[idx].done = false;
  // Atualiza a interface do usuário para refletir as mudanças
  refreshUI();
}

// Declara uma função para lidar com o evento de clique no botão de adicionar um novo item à lista de afazeres
function addItemClickHandler() {
  // Obtém o elemento de entrada onde o usuário digita o novo item
  let input = document.getElementById("todo");

  // Verifica se o valor digitado está vazio ou contém apenas espaços em branco
  if (input.value.trim().length == 0) {
    // Coloca o foco de volta no campo de entrada para que o usuário possa digitar
    input.focus();
    // Sai da função se o valor estiver vazio
    return;
  }

  // Adiciona o novo item à lista de afazeres
  addItem(input.value);
  // Atualiza a interface do usuário para refletir as mudanças
  refreshUI();
  // Limpa o campo de entrada
  input.value = "";
}

// Adiciona um ouvinte de evento que é acionado quando a página é carregada
window.addEventListener("load", function () {
  // Atualiza a interface do usuário quando a página é carregada pela primeira vez
  refreshUI();
});

