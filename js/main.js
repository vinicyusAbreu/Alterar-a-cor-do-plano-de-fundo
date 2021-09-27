cores = ['red', 'blue', 'orange', 'yellow', 'green', 'cyan', 'purple', 'pink', 'white', 'gray', 'brown'];

function mudarCor() {
    var escolha = Math.floor(Math.random() * cores.length);
    document.getElementById('cor').style.backgroundColor = cores[escolha];
}