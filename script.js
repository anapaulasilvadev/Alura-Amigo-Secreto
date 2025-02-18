let nomes = ["Ana", "Carlos", "Mariana", "Daniel", "Patrícia", "Gustavo", "Maria", "Fernanda", "Claúdio"]; // Lista inicial

function adicionarNome() {
    let nomeInput = document.getElementById("nomeInput").value.trim();
    
    if (nomeInput === "") {
        alert("Digite um nome válido!");
        return;
    }

    nomes.push(nomeInput);
    atualizarLista();
    document.getElementById("nomeInput").value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearNome() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[indiceSorteado];

    document.getElementById("resultado").textContent = `🎉 Nome sorteado: ${nomeSorteado}`;
    
    // Exibir botão de reiniciar
    document.getElementById("botaoReiniciar").style.display = "block";
}

function reiniciarSorteio() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("botaoReiniciar").style.display = "none";
}

function deletarNomes() {
    nomes = [];
    atualizarLista();
}

atualizarLista(); // Atualiza a lista ao carregar a página
