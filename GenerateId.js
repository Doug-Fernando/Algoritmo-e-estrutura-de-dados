const random = () => {
    const lettersAndNumbers = 'QWERTYUIOPASDFGHJKLMNBVCXZqwert1yu2i3o4p5l6k7jh8g9fds0azxcvbnm';
    let id = '';
    for(i = 0; i <= 4; i += 1) {
        let idAux = '';
        for(j = 0; j <= 4; j += 1){
            idAux += lettersAndNumbers.charAt(Math.floor(Math.random() * lettersAndNumbers.length));
        }
        if(i === 4) return id += `${idAux}`;
        id += `${idAux}-`
    }
    return id;
};

// ref https://pt.stackoverflow.com/questions/292438/gerar-aleatoriamente-no-formato-xxxx-0000
const random2 = () => {
    let id = '';
    for(i = 0; i <= 4; i += 1) {
        if(i === 4) return id += Math.random().toString(36).substr(-4).toUpperCase();
        id += `${Math.random().toString(36).substr(-4).toUpperCase()}-`
    }
    return id;
};


console.log(random());
console.log(random2());

