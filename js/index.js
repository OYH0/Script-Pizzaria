function fazerPedido() {
    function destacarErro(elemento) {
        elemento.classList.add("erro");
        setTimeout(() => elemento.classList.remove("erro"), 3000);
    }

    function exibirMensagem(tipo, texto) {
        let mensagemDiv = document.createElement("div");
        mensagemDiv.className = `mensagem ${tipo}`;
        mensagemDiv.textContent = texto;

        document.body.appendChild(mensagemDiv);

        setTimeout(() => mensagemDiv.remove(), 3000);
    }

    let inputNome = document.querySelector(".input-text input");
    let nomeCliente = inputNome.value.trim();

    if (!nomeCliente) {
        exibirMensagem("erro", "Por favor, preencha o nome antes de fazer o pedido.");
        destacarErro(inputNome);
        return;
    }

    let saborSelecionado = document.querySelector("input[name='sabor']:checked");
    if (!saborSelecionado) {
        exibirMensagem("erro", "Por favor, selecione o sabor da pizza.");
        destacarErro(document.querySelector("input[name='sabor']").closest(".opcoes"));
        return;
    }

    let tamanhoSelecionado = document.querySelector("input[name='tamanho']:checked");
    if (!tamanhoSelecionado) {
        exibirMensagem("erro", "Por favor, selecione o tamanho da pizza.");
        destacarErro(document.querySelector("input[name='tamanho']").closest(".opcoes"));
        return;
    }

    let valorPizza;
    switch (tamanhoSelecionado.value) {
        case "Pequena":
            valorPizza = 25;
            break;
        case "Média":
            valorPizza = 35;
            break;
        case "Grande":
            valorPizza = 50;
            break;
        default:
            exibirMensagem("erro", "Tamanho inválido selecionado.");
            return;
    }

    let adicionaisSelecionados = document.querySelectorAll("input[name='adicionais']:checked");
    let valorAdicionais = adicionaisSelecionados.length * 5;

    let valorTotal = valorPizza + valorAdicionais;

    let elementoValorTotal = document.querySelector("#total h2 strong");
    elementoValorTotal.textContent = valorTotal.toFixed(2).replace(".", ",");

    exibirMensagem("sucesso", `Obrigado, ${nomeCliente}! Seu pedido foi realizado com sucesso. O valor total é R$ ${valorTotal.toFixed(2).replace(".", ",")}.`);
}
