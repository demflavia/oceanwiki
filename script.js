let nomesDosPeixes = ["Ocellaris", "Royal Dottyback", "Hepatus MD"];

let imagemDosPeixes = [
  "https://http2.mlstatic.com/D_NQ_NP_631653-MLB41826736235_052020-O.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SEq-Xn2s_4pXvFMnsRYHH8AWx6iw38gfuQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehGHG39feVKre6UKz-L--PYJMMD8nEIRjbw&usqp=CAU"
];

let linkParaComprar = [
  "https://lojaaquariomania.com.br/index.php?id_product=12&controller=product",
  "https://reefland.com.br/peixes/513-peixe-bicolor-dottyback.html",
  "https://reefland.com.br/inicio/485-peixe-hepatus-md.html"
];

let containerPeixes = document.getElementById("containerPeixes");
console.log(containerPeixes);

function mostrarPeixesNaTela() {
  containerPeixes.innerHTML = "";
  for (let i = 0; i < nomesDosPeixes.length; i++) {
    containerPeixes.innerHTML += `
    
                                  <div class = "peixe">
                                  <img src="${imagemDosPeixes[i]}" class = "imagens">
                                  <a href="${linkParaComprar[i]}" target="_blank">${nomesDosPeixes[i]}</a>
    
                                  </div>
    
    `;
  }
}

mostrarPeixesNaTela();

function adicionarNovoPeixeNaTela() {
  let nomeDoPeixe = document.getElementById("nomeDoPeixe").value;
  let linkImagem = document.getElementById("linkImagem").value;
  let linkLoja = document.getElementById("linkLoja").value;

  if (nomesDosPeixes.includes(nomeDoPeixe)) {
    alert("Ops! Esse peixe já existe em nossa lista!");
  } else {
    nomesDosPeixes.push(nomeDoPeixe);
    imagemDosPeixes.push(linkImagem);
    linkParaComprar.push(linkLoja);

    mostrarPeixesNaTela();
  }
}
