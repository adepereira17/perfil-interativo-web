// Explicação: Este arquivo adiciona interatividade ao nosso site

// 1. ALTERAR TEXTO "SOBRE MIM" - Explicar: como selecionar e modificar elementos
const botaoAlterarTexto = document.getElementById('alterar-texto');
const texto = document.getElementById('texto-sobre');

botaoAlterarTexto.addEventListener('click', function() {
    // Explicar: prompt() é uma função que abre uma caixa de diálogo
    const novoTexto = prompt('Digite um novo texto sobre você:');
    
    // Explicar: if é uma condicional que verifica se o usuário digitou algo
    if (novoTexto && novoTexto.trim() !== '') {
        texto.textContent = novoTexto;
        alert('Texto alterado com sucesso!');
    } else {
        alert('Nenhum texto foi digitado.');
    }
});

// 2. TROCAR COR DE FUNDO DA FOTO - Explicar: como modificar estilos CSS via JS
const botaoTrocarFoto = document.getElementById('trocar-foto');
const fotoPerfil = document.getElementById('foto-perfil');

// Explicar: array com cores diferentes
const cores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3', '#FF33A1'];

botaoTrocarFoto.addEventListener('click', function() {
    // Explicar: Math.random() gera números aleatórios, Math.floor() arredonda para baixo
    const indice = Math.floor(Math.random() * cores.length);
    const corSelecionada = cores[indice];
    
    // Explicar: style.property permite modificar CSS diretamente
    fotoPerfil.style.borderColor = corSelecionada;
    fotoPerfil.style.boxShadow = `0 0 15px ${corSelecionada}`;
});

// 3. ADICIONAR INTERESSES - Explicar: como criar e adicionar elementos à página
const botaoAdicionarInteresse = document.getElementById('adicionar-interesse');
const listaInteresses = document.getElementById('lista-interesses');

botaoAdicionarInteresse.addEventListener('click', function() {
    const novoInteresse = prompt('Digite um novo interesse:');
    
    if (novoInteresse && novoInteresse.trim() !== '') {
        // Explicar: createElement() cria um novo elemento HTML
        const novoItem = document.createElement('li');
        novoItem.textContent = novoInteresse;
        
        // Explicar: appendChild() adiciona o elemento criado à página
        listaInteresses.appendChild(novoItem);
        alert('Interesse adicionado!');
    } else {
        alert('Nenhum interesse foi digitado.');
    }
});

// 4. CONTADOR DE VISITAS - Explicar: como usar localStorage para salvar dados
const contadorVisitas = document.getElementById('visitas');
const botaoResetContador = document.getElementById('reset-contador');

// Explicar: localStorage.getItem() obtém dados salvos no navegador
let visitas = localStorage.getItem('visitasPerfil');

// Explicar: verifica se já existe um contador salvo
if (visitas === null) {
    visitas = 0;
} else {
    visitas = parseInt(visitas);
}

// Incrementa o contador
visitas++;
contadorVisitas.textContent = visitas;

// Explicar: localStorage.setItem() salva dados no navegador
localStorage.setItem('visitasPerfil', visitas);

// Botão para zerar o contador
botaoResetContador.addEventListener('click', function() {
    localStorage.setItem('visitasPerfil', 0);
    contadorVisitas.textContent = 0;
    alert('Contador zerado!');
});

// 5. TROCAR CORES DO TEMA - Explicar: como modificar múltiplos elementos
const botoesCores = document.querySelectorAll('.cor-btn');

botoesCores.forEach(botao => {
    botao.addEventListener('click', function() {
        const cor = this.getAttribute('data-cor');
        
        // Explicar: document.querySelectorAll() seleciona vários elementos
        const titulos = document.querySelectorAll('h1, h2');
        const botoes = document.querySelectorAll('button:not(.cor-btn)');
        
        // Explicar: forEach é um loop que percorre todos os elementos
        titulos.forEach(titulo => {
            titulo.style.color = cor;
        });
        
        botoes.forEach(botao => {
            botao.style.backgroundColor = cor;
        });
        
        // Altera também a cor da borda da foto
        fotoPerfil.style.borderColor = cor;
    });
});

// 6. MODO NOTURNO - Explicar: como alternar classes CSS
const botaoModoNoturno = document.getElementById('modo-noturno');
let modoNoturnoAtivo = false;

botaoModoNoturno.addEventListener('click', function() {
    // Explicar: classList.toggle() adiciona ou remove uma classe
    document.body.classList.toggle('modo-noturno');
    
    modoNoturnoAtivo = !modoNoturnoAtivo;
    
    // Explicar: alteramos o texto do botão conforme o estado
    if (modoNoturnoAtivo) {
        botaoModoNoturno.textContent = 'Desativar Modo Noturno';
        botaoModoNoturno.style.backgroundColor = '#FF9800';
    } else {
        botaoModoNoturno.textContent = 'Ativar Modo Noturno';
        botaoModoNoturno.style.backgroundColor = '#2196F3';
    }
});

// 7. ATUALIZAR DATA NO RODAPÉ - Explicar: como trabalhar com datas
const dataAtualElement = document.getElementById('data-atual');
const hoje = new Date();

// Explicar: opções de formatação de data
const opcoesData = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

// Explicar: toLocaleDateString() formata a data de acordo com o idioma
dataAtualElement.textContent = hoje.toLocaleDateString('pt-BR', opcoesData);

// 8. PERMITIR ALTERAR O NOME - Explicar: como modificar conteúdo de elementos
const nomeElement = document.getElementById('nome');
const nomeRodape = document.getElementById('nome-rodape');

nomeElement.addEventListener('click', function() {
    const novoNome = prompt('Digite seu nome:');
    
    if (novoNome && novoNome.trim() !== '') {
        nomeElement.textContent = novoNome;
        nomeRodape.textContent = novoNome;
        alert(`Nome alterado para ${novoNome}!`);
    }
});