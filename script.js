document.addEventListener('DOMContentLoaded', () => {
    const agendaForm = document.getElementById('agenda');
    const contatosTabela = document.getElementById('contatos-tabela');
    const botaoAdicionar = document.getElementById('botao-adicionar');
    const botaoExcluir = document.getElementById('botao-excluir');
    const selectAllCheckbox = document.getElementById('select-all');

    botaoAdicionar.addEventListener('click', (event) => {
        event.preventDefault();

        const nomeContato = document.getElementById('nome-contato').value;
        const sobrenomeContato = document.getElementById('sobrenome-contato').value;
        const numeroContato = document.getElementById('numero-contato').value;
        const emailContato = document.getElementById('email-contato').value;

        if (nomeContato && sobrenomeContato) {
            const novaLinha = document.createElement('tr');

            novaLinha.innerHTML = `
                <td><input type="checkbox"></td>
                <td>${nomeContato} ${sobrenomeContato}</td>
                <td>${numeroContato}</td>
                <td>${emailContato}</td>
                <td><img src="./imagens/lixeira.png" class="lixeira" alt="Remover contato" style="width:20px; height:20px;"></td>
            `;

            contatosTabela.appendChild(novaLinha);

            // Limpar campos do formulário após adicionar
            agendaForm.reset();
        } else {
            alert('Por favor, preencha os campos obrigatórios.');
        }
    });

    botaoExcluir.addEventListener('click', (event) => {
        event.preventDefault();

        const checkboxes = contatosTabela.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const linha = checkbox.closest('tr');
                contatosTabela.removeChild(linha);
            }
        });
    });

    // Remover contato ao clicar no ícone da lixeira
    contatosTabela.addEventListener('click', (event) => {
        if (event.target.classList.contains('lixeira')) {
            const linha = event.target.closest('tr');
            contatosTabela.removeChild(linha);
        }
    });

    // Selecionar todos os checkboxes
    selectAllCheckbox.addEventListener('change', (event) => {
        const checkboxes = contatosTabela.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = event.target.checked;
        });
    });
});