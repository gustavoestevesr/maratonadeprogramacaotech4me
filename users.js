let equipes = ["equipe01@tech4me","equipe02@tech4me","equipe03@tech4me","equipe04@tech4me","equipe05@tech4me"]
let senhas = ["Tech4me2021","Tech4me2021","Tech4me2021","Tech4me2021","Tech4me2021"]
let qtdEquipesParticipantes = 5
let numeroQuestoes = 5

let numEquipeLogada = 0

let temUser = false
let senhaCorreta = false

function auth(){

    temUser = false
    senhaCorreta = false
    userFilled = document.getElementById("user").value
    passwordFilled = document.getElementById("password").value
    
    for (let index = 0; index < qtdEquipesParticipantes, !temUser; index++) {
        if (equipes[index] == userFilled && senhas[index] == passwordFilled) {
            temUser = true;
            if (senhas[index] == passwordFilled) {
                senhaCorreta = true;
                numEquipeLogada = index+1;
            }
        }
    }

    if(temUser){
        if(senhaCorreta){
            alert(`Seja bem vindo! Equipe ` + numEquipeLogada)
            window.location.replace("home.html");
        }else{
            alert(`Senha incorreta`)
        }
    }else{
        alert(`Usuário incorreto`)
    }

}

function myscore( ){

    document.getElementById('score').innerHTML = "<h1>Pontuação Geral</h1>";
    document.getElementById('score').innerHTML = "<h2>Equipe 01</h2>";
    for (let index = 0; index < numeroQuestoes; index++) {
        document.getElementById('score').innerHTML += `
        <div class="ballon">
            <img src="${equipe01[index]}" alt="${equipe01[index]}" height="50px">
            <h2>Desafio ${index+1}</h2>
        </div>
        ` 
    }

    document.getElementById('score').innerHTML += "<h2>Equipe 02</h2>";
    for (let index = 0; index < numeroQuestoes; index++) {
        document.getElementById('score').innerHTML += `
        <div class="ballon">
            <img src="${equipe02[index]}" alt="${equipe02[index]}" height="50px">
            <h2>Desafio ${index+1}</h2>
        </div>
        ` 
    }

    document.getElementById('score').innerHTML += "<h2>Equipe 03</h2>";
    for (let index = 0; index < numeroQuestoes; index++) {
        document.getElementById('score').innerHTML += `
        <div class="ballon">
            <img src="${equipe03[index]}" alt="${equipe03[index]}" height="50px">
            <h2>Desafio ${index+1}</h2>
        </div>
        ` 
    }

    document.getElementById('score').innerHTML += "<h2>Equipe 04</h2>";
    for (let index = 0; index < numeroQuestoes; index++) {
        document.getElementById('score').innerHTML += `
        <div class="ballon">
            <img src="${equipe04[index]}" alt="${equipe04[index]}" height="50px">
            <h2>Desafio ${index+1}</h2>
        </div>
        ` 
    }

    document.getElementById('score').innerHTML += "<h2>Equipe 05</h2>";
    for (let index = 0; index < numeroQuestoes; index++) {
        document.getElementById('score').innerHTML += `
        <div class="ballon">
            <img src="${equipe05[index]}" alt="${equipe05[index]}" height="50px">
            <h2>Desafio ${index+1}</h2>
        </div>
        ` 
    }

}

let equipe01 = ["true.png","false.png","false.png","false.png","false.png"]
let equipe02 = ["false.png","true.png","true.png","false.png","false.png"]
let equipe03 = ["false.png","true.png","true.png","false.png","false.png"]
let equipe04 = ["false.png","true.png","true.png","false.png","false.png"]
let equipe05 = ["false.png","true.png","true.png","false.png","false.png"]
