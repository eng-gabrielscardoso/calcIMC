const submit = document.getElementById('submit')
const res = document.getElementById('res');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    let imc;
    
    res.innerHTML = '';

    const calcIMC = () => {
        imc = weight / (height * height);
        return imc;
    };calcIMC();

    const rateIMC = () => {
        if(imc < 18.5){
            res.innerHTML = `
                ${name}, você está com seu IMC igual a ${imc.toFixed(2).replace('.',',')}. Seu quadro exige que você se alimente melhor e ganhe mais peso para que se mantenha saudável.
            `;
        } else if(imc >= 18.5 && imc < 24.99){
            res.innerHTML = `
                ${name}, você está com seu IMC igual a ${imc.toFixed(2).replace('.',',')}. Seu quadro está saudável! Parabéns e mantenha sempre uma alimentação saudável!
            `;
        } else if(imc >= 25 && imc < 29.99){
            res.innerHTML = `
                ${name}, você está com o seu IMC igual a ${imc.toFixed(2).replace('.',',')}. Seu quadro aponta que você está acima do peso. Tente praticar mais exercícios e mantenha uma alimentação saudável!
            `;
        } else if(imc >= 30 && imc < 34.99){
            res.innerHTML = `
                ${name}, você está com o seu IMC igual a ${imc.toFixed(2).replace('.',',')}. Seu quadro aponta que você se encontra em estágio de obesidade grau I. Procure um médico para evitar maiores problemas de saúde.
            `;
        } else if(imc >= 35 && imc < 39.99){
            res.innerHTML = `
                ${name}, você está com o seu IMC igual a ${imc.toFixed(2).replace('.',',')}. Seu quadro aponta que você se encontra em estágio de obesidade grau II. Procure imediatamente um profissional de saúde.
            `;
        } else if(imc >= 40){
            res.innerHTML = `
                ${name}, você está com o seu IMC igual a ${imc.toFixed(2).replace('.',',')}. Seu quadro aponta que você se encontra em estágio de obesidade grau III. Procure imediatamente um profissional de saúde.
            `;
        };
    };rateIMC();
});

const resCurrent = document.querySelector('span#current');
const date = new Date();

const sendCurrent = () => {
    const currentDay = date.getDate();
    let currentMonth = date.getMonth()+1;
    const currentYear = date.getFullYear();

    return resCurrent.innerHTML = `${currentDay}/${currentMonth}/${currentYear}`;
};sendCurrent();