function clock(){
    let minutos = 0;
    let segundos = 0;
    let horas = 0;
    let intervalo;

    const timerDisplay = document.querySelector('#display');
    const start = document.querySelector('.iniciar');
    
    function displayDefaultTime(){ // Retorna o tempo zerado
        horas = 0;
        minutos = 0;
        segundos = 0;
        return timerDisplay.innerHTML = `${zeroLeft(horas)}:${zeroLeft(minutos)}:${zeroLeft(segundos)}`;
    }

    function buttonSettings(){ 
        start.disabled = false; // Disponibiliza o botão de iniciar 
        timerDisplay.style.color = 'black' // Devolve a cor preta ao timer após pressionar pausa
    }

    function zeroLeft(x){ // Adiciona um zero a esquerda nos números do timer
        return x < 10 ? `0${x}`: x
    }

    displayDefaultTime()

    document.addEventListener('click',function(e){ // Captura eventos de click
        const element = e.target;
        if(element.classList.contains('iniciar')){ // Ação de iniciar
            clearInterval(intervalo)
            start.disabled = true; // Bloqueia o botão de iniciar uma vez que já foi apertado
            timerDisplay.style.color = 'black'
            intervalo = setInterval(function () {
            segundos += 1;
            if (segundos === 60){ // Transforma 60 segundos em 1 minuto
                segundos = 0;
                minutos += 1;
            }
            if (minutos === 60){ // Transforma 60 minutos em 1 hora
                minutos = 0
                horas += 1
            }
            timerDisplay.innerHTML = (`${zeroLeft(horas)}:${zeroLeft(minutos)}:${zeroLeft(segundos)}`);
            }, 1000);
        }

        if(element.classList.contains('pausar')){ // Ação de pausar
            buttonSettings()
            timerDisplay.style.color = 'red' // Deixa o timer vermelho
            clearInterval(intervalo);
        }

        if(element.classList.contains('zerar')){ // Ação de zerar 
            buttonSettings()
            clearInterval(intervalo);
            displayDefaultTime()
        }
    });
}
clock()
    