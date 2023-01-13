const larguraTela = window.screen.width;

let inputNome = document.querySelector('#inputNome');
let inputEmail = document.querySelector('#inputEmail');
const btnEnviar = document.querySelector('#btnEnviar');
    
const mensagemErroNome = document.getElementById('mensagemNome');
const mensagemErroEmail = document.getElementById('mensagemEmail');

btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault();

      
    let inputNome = document.querySelector('#inputNome');
    let inputEmail = document.querySelector('#inputEmail');
    const btnEnviar = document.querySelector('#btnEnviar');
    
    const mensagemErroNome = document.getElementById('mensagemNome');
    const mensagemErroEmail = document.getElementById('mensagemEmail');
    
    let email = inputEmail.value;

    if ( !inputNome.value || !inputEmail.value || !validaEmail(email) ){
        mensagemErroNome.style = '';
        mensagemErroEmail.style = '';
        inputNome.style = 'border-color:red';
        inputEmail.style = 'border-color:red';
        btnEnviar.style = 'background-color:rgb(76, 82, 4)';
    } else {
                
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sucesso!!!',
            text:'sua inscrição foi realizada e em breve você começará a receber nossas notícias!!!',
            background: 'rgb(50, 52, 54)',
            color: 'white',
            showConfirmButton: false,
            timer: 5500
        })

        inputNome.value ='';
        inputEmail.value ='';

    }


});

function validaEmail(email) {
    const validEmail = /\S+@\S+\.\S+/;
    return validEmail.test(email);
}

inputNome.addEventListener('click', ()=>{
    mensagemErroNome.style = 'display: none';
    inputNome.style = 'border-color:gold';
    inputEmail.style = 'border-color:gold';
    btnEnviar.style = 'background-color:gold';
});
inputEmail.addEventListener('click', ()=>{
    mensagemErroEmail.style = 'display: none';
    inputNome.style = 'border-color:gold';
    inputEmail.style = 'border-color:gold';
    btnEnviar.style = 'background-color:gold';
});

let motos = [];

function carregaApi(){

    const url = 'https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja';
            
            fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': '78UjoQDosHIKvsun1I8TQQ==m1g9ftDTLgK40wDT',
                    'Content-type':'application/json;charset=UTF-8',
                },
                
            })
            .then((res) => res.json())
        
            .then((data) => {                
                const card = document.getElementById('card');
            
                for ( i = 0; i <=3; i++ ){
                    const divCards = document.createElement('div');
                    divCards.innerHTML = `
                                            <h3>Marca: ${data[i].make}</h3>
                                            <p>Modelo: ${data[i].model}</p>
                                            <p>Ano: ${data[i].year}</p>
                                            <p>Potência: ${data[i].power}</p>
                                            <p>Deslocamento: ${data[i].displacement}</p>
                                            `
                    divCards.className = 'article__text';
                    card.appendChild(divCards);
                }


                // data.forEach(
                //     (moto) => {
                //                 const divCards = document.createElement('div');
                //                 divCards.innerHTML = `
                //                                         <h3>${moto.make}</h3>
                //                                         <p>${moto.model}</p>
                //                                         <p>${moto.year}</p>
                //                                         <p>${moto.power}</p>
                //                                         <p>${moto.displacement}</p>
                //                                         `
                //                 divCards.className = 'article__text';
                //                 card.appendChild(divCards);
                //             }
                       
                // )

                
            })
}

let dados = [];
let indice = 0;

function cardsRotativo(){

    const sliders = document.getElementById('slidersCards');
    // const div = document.createElement('slidersCards');
    
    const url = 'https://api.api-ninjas.com/v1/motorcycles?make=yamaha&model=r6';
            
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': '78UjoQDosHIKvsun1I8TQQ==m1g9ftDTLgK40wDT',
                'Content-type':'application/json;charset=UTF-8',
            },
            
        })
        .then((res) => res.json())
    
        .then((data) => {                
            
            for (moto of data){
                dados.push(moto);
            }
            
            if ( larguraTela < 1280){
            
                
                const divCardsRotativo = document.createElement('div');
                divCardsRotativo.innerHTML = `
                                        <h3>${dados[indice].make}</h3>
                                        <p>${dados[indice].model}</p>
                                        <p>${dados[indice].year}</p>
                                        <p>${dados[indice].power}</p>
                                        <p>${dados[indice].displacement}</p>
                                        `
                divCardsRotativo.className = 'slidersCards';
                sliders.appendChild(divCardsRotativo);
                

                const btnAnterior = document.createElement('span');
                btnAnterior.className = 'btnSlid btnAnterior';
                btnAnterior.id = 'btnAnterior';
                btnAnterior.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'

                const btnProximo = document.createElement('span');
                btnProximo.className = 'btnSlid btnProximo';
                btnProximo.id = 'btnProximo';
                btnProximo.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
                
                sliders.appendChild(btnAnterior);
                sliders.appendChild(btnProximo);

                btnAnterior.addEventListener('click', () =>{
            
                    
                    if(indice == 0){
                        indice = dados.length;
                    } else {
                        
                        divCardsRotativo.innerHTML = `
                                                <h3>${dados[indice].make}</h3>
                                                <p>${dados[indice].model}</p>
                                                <p>${dados[indice].year}</p>
                                                <p>${dados[indice].power}</p>
                                                <p>${dados[indice].displacement}</p>
                                                `
                    }
                    indice--;
                    
                })

                
                btnProximo.addEventListener('click', () => {
                    
                        indice++;
                        
                        if(indice == dados.length){
                            indice = 0;
                        } else {
                            
                            divCardsRotativo.innerHTML = `
                                                    <h3>${dados[indice].make}</h3>
                                                    <p>${dados[indice].model}</p>
                                                    <p>${dados[indice].year}</p>
                                                    <p>${dados[indice].power}</p>
                                                    <p>${dados[indice].displacement}</p>
                                                    `;
                            
                        }
                    
                    
                    
                })

            setInterval(()=> {
            indice++;
                        
            if(indice == dados.length){
                indice = 0;
            } else {
                
                divCardsRotativo.innerHTML = `
                                        <h3>${dados[indice].make}</h3>
                                        <p>${dados[indice].model}</p>
                                        <p>${dados[indice].year}</p>
                                        <p>${dados[indice].power}</p>
                                        <p>${dados[indice].displacement}</p>
                                        `;
                
            }
                
            }, 3000);
        } else {
                for ( i = 0; i <=3; i++ ){
                    const divCardsRotativo = document.createElement('div');
                    divCardsRotativo.innerHTML = `
                                            <h3>Marca: ${data[i].make}</h3>
                                            <p>Modelo: ${data[i].model}</p>
                                            <p>Ano: ${data[i].year}</p>
                                            <p>Potência: ${data[i].power}</p>
                                            <p>Deslocamento: ${data[i].displacement}</p>
                                            `
                    divCardsRotativo.className = 'slidersCardsDesk';
                    sliders.appendChild(divCardsRotativo);
                }
            }})    

        
}


cardsRotativo();
carregaApi();
