function myTimer() {

    function getHoursseconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getHoursseconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
    
        };
    
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
    
        };
    
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    
        };
    
    });
    

};

myTimer();











/*function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);


}
console.log(teste);*/