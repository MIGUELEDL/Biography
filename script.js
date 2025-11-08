//função de enviar mensagem para o whatsApp
function enviarWhats(event) {
    event.preventDefault()

    //variaveis 
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '8499766852'
    
    //texto e mensagem formatada
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    //url do meu whatsApp
    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

    //Abrir nova janela
    window.open(url, '_blank')
}      
