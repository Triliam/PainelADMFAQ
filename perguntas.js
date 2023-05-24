if (localStorage.getItem('perguntas-c-resposta') === null) {

  var listaPerguntaComResposta = [
    {
      id: 0,
      pergunta: "Quando começa as aulas?",
      resposta: "Comeca no dia 08/02",
      nomeAluno: "Thaua",
      dataPergunta: "22/05",
    },
  
    {
      id: 1,
      pergunta: "Quando acaba as aulas?",
      resposta: "Nem eu sei",
      nomeAluno: "Thaua",
      dataPergunta: "22/03",
    },
  
    {
      id: 2,
      pergunta: "Quando que é as ferias??",
      resposta: "Descobre sozinho meu nobre",
      nomeAluno: "Anonimo",
      dataPergunta: "22/03",
    },
  ];


  let listaPerguntaComRespostaJSON = JSON.stringify(listaPerguntaComResposta)
  localStorage.setItem('perguntas-c-resposta', listaPerguntaComRespostaJSON)
  console.log('thaua')

} else {

  console.log('tais')
  var listaPerguntaComResposta = JSON.parse(localStorage.getItem('perguntas-c-resposta'))

}

const divPerguntaComResposta = document.getElementById("perguntas-resposta");
const exibirPerguntasComResposta = () => {
  listaPerguntaComResposta.forEach((el, indice) => {
    // Cria as divs --------------------------------------
    pergunta = document.createElement("div");

    // Pergunta Cabecalho
    perguntaCabecalho = document.createElement("div");

    perguntaCampoInformacoes = document.createElement("div");
    perguntaImagem = document.createElement("div");
    imagem = document.createElement("img");

    perguntaInformacoes = document.createElement("div");
    perguntaInformacoesTitulo = document.createElement("h2");
    perguntaInformacoesTitulo.innerHTML = `${el.pergunta}`;
    perguntaInformacoesNome = document.createElement("span");
    perguntaInformacoesData = document.createElement("span");
    perguntaInformacoesNome.innerHTML = `${el.nomeAluno} |`;
    perguntaInformacoesData.innerHTML = ` ${el.dataPergunta}`;

    perguntaCampoBotoes = document.createElement("div");
    editarButton = document.createElement("button");
    editarButtonIcone = document.createElement("i");
    editarButton.innerHTML = "EDITAR";

    addButton = document.createElement("button");
    addButtonIcone = document.createElement("i");
    addButton.innerHTML = "ADICIONAR";

    excluirButton = document.createElement("button");
    excluirButtonIcone = document.createElement("i");
    excluirButton.innerHTML = "EXCLUIR";

    perguntaResposta = document.createElement("div");
    perguntaRespostaTexto = document.createElement("p");
    perguntaResposta.innerHTML = `${el.resposta}`;

    // Adiciona elas e seta as classes ------------------------------
    divPerguntaComResposta.appendChild(pergunta);
    pergunta.setAttribute("class", `pergunta pergunta-${el.id}`);

    // Pergunta Cabecalho
    pergunta.appendChild(perguntaCabecalho);
    perguntaCabecalho.setAttribute("class", "pergunta-cabecalho");

    perguntaCabecalho.appendChild(perguntaCampoInformacoes);
    perguntaCampoInformacoes.setAttribute(
      "class",
      "pergunta-campo-informacoes"
    );

    perguntaCampoInformacoes.appendChild(perguntaImagem);
    perguntaImagem.setAttribute("class", "pergunta-imagem");

    perguntaImagem.appendChild(imagem);
    imagem.src = "imagens/user.png";
    imagem.setAttribute("width", "40px");
    imagem.setAttribute("height", "40px");

    perguntaCampoInformacoes.appendChild(perguntaInformacoes);
    perguntaInformacoes.setAttribute("class", "pergunta-informacoes");

    perguntaInformacoes.appendChild(perguntaInformacoesTitulo);
    perguntaInformacoes.appendChild(perguntaInformacoesNome);
    perguntaInformacoes.appendChild(perguntaInformacoesData);

    perguntaCabecalho.appendChild(perguntaCampoBotoes);
    perguntaCampoBotoes.setAttribute("class", "pergunta-campo-botoes");

    perguntaCampoBotoes.appendChild(editarButton);
    editarButton.setAttribute("class", "editarButton pergunta-botao");
    editarButton.setAttribute('onclick', 'modal0editar.showModal()')
    editarButton.appendChild(editarButtonIcone);
    editarButtonIcone.setAttribute("class", "ph-bold ph-pencil-simple-line");

    perguntaCampoBotoes.appendChild(addButton);
    addButton.setAttribute("class", "addButton pergunta-botao");
    addButton.appendChild(addButtonIcone);
    addButtonIcone.setAttribute("class", "ph ph-upload-simple");

    perguntaCampoBotoes.appendChild(excluirButton);
    excluirButton.setAttribute("class", "excluirButton pergunta-botao");
    excluirButton.appendChild(excluirButtonIcone);
    excluirButtonIcone.setAttribute("class", "ph-bold ph-trash-simple");

    pergunta.appendChild(perguntaResposta);
    perguntaResposta.setAttribute("class", "pergunta-campo-resposta");
    perguntaResposta.appendChild(perguntaRespostaTexto);
  });
};
exibirPerguntasComResposta();

// modal ---------------------
const modal0editar = document.getElementById('modal-editar')


const modificarPergunta = (indice) => {
  
}