let url = window.location.pathname  
    function mudaPag (){
        if(url == "/") {
            document.getElementById('icone').src = "/images/glass-oculos-preto-peq.png"
        }else if (url == "/especificacoes") {
            document.getElementById('icone').src = "/images/especificacoes.png"
        }else if (url == "/fotos") {
            document.getElementById('icone').src = "/images/fotos.png"
        }else if (url == "/multimidia") {
            document.getElementById('icone').src = "/images/multimidia.png"
        }else if (url == "/faleconosco") {
            document.getElementById('icone').src = "/images/contato.png"
        }
    }
                
        function mudaFoto(foto){
            document.getElementById('icone').src = foto;
        }
        