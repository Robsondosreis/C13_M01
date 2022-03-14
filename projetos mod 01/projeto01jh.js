console.clear();
const prompt = require('prompt-sync')();

//texto de entrada

console.log("O sedentarismo se caracteriza pela falta de atividades físicas em pessoas de qualquer faixa etária. É uma situação em que a pessoa não pratica qualquer tipo de atividade física regularmente, além de permanecer muito tempo sentado e não ter disposição para realizar atividades simples do dia-a-dia, o que tem influência direta na saúde e bem-estar da pessoa, já que aumenta o risco de doenças cardiovasculares, diabetes e perda de massa muscular.")
console.log("VOCÊ!!! É você mesmo! Bora se mexer, deixar esse sedentarismo para traz, cumpra com os seguintes requisitos e trilhe seu caminho rumo a uma melhor qualidade de vida!")
console.log()
console.log("Nas próximas perguntas escolha S para sim ou N para não");

//pergunta 01
while(true){
 let pgt1=prompt("Foi dormir mais cedo para acordar com disposição?[S/N]: ").toUpperCase();
console.log(pgt1);
if(pgt1=="S"){
   resul1=10
   break;
}else if(pgt1=="N"){
    resul1=0
    break;
}else{
    console.log("A resposta precisa ser S ou N! Tente novamente!");
    console.log();
    continue;
}   
}
console.log();

//pergunta 02
while(true){
 let pgt2=prompt("Levantou assim que o despertador tocou?[S/N]: ").toUpperCase();
console.log(pgt2);

if(pgt2=="S"){
    resul2=10
    break;
 }else if(pgt2=="N"){
     resul2=0
     break;
 }else{
     console.log("A resposta precisa ser S ou N! Tente novamente!");
     console.log();
     continue;
 }   
}
console.log();

//pergunta 03
while(true){
 
    let pgt3=prompt("Se alimentou de forma correta para ter energia?[S/N]: ").toUpperCase();
    console.log(pgt3);
 
    if(pgt3=="S"){
        resul3=10
        break;
     }else if(pgt3=="N"){
         resul3=0
         break;
     }else{
         console.log("A resposta precisa ser S ou N! Tente novamente!");
         console.log();
         continue;
     }   
}
console.log();

// pergunta 04
while(true){
 
    let pgt4=prompt("Esta utilizando roupa apropriada para corrida?[S/N]: ").toUpperCase();
    console.log(pgt4);
    
    if(pgt4=="S"){
        resul4=10
        break;
     }else if(pgt4=="N"){
         resul4=0
         break;
     }else{
         console.log("A resposta precisa ser S ou N! Tente novamente!");
         console.log();
         continue;
     }   
}
console.log();

// pergunta 05
while(true){
 
    let pgt5=prompt("Fez alongamento e aquecimento?[S/N]: ").toUpperCase();
    console.log(pgt5);
    
    if(pgt5=="S"){
        resul5=10
        break;
     }else if(pgt5=="N"){
         resul5=0
         break;
     }else{
         console.log("A resposta precisa ser S ou N! Tente novamente!");
         console.log();
         continue;
     }   
}
console.log();

let resultado=(resul1+resul2+resul3+resul4+resul5);
console.log(`Você fez ${resultado} pontos`);
console.log();

//frases do resultado
if (resultado==0){
    console.log("Sedentario é seu nome, você nem sequer tentou e fracassou completamente!");
}else if(resultado==10){
    console.log("Só a força de vontade não te levara a lugar algum, você precisa de atitude!");
}else if(resultado==20){
    console.log("Apesar do esforço você está longe de atingir seus objetivos!");
}else if(resultado==30){
    console.log("Esta no caminho certo, apenas mais um pouco de comprometimento!");
}else if(resultado==40){
    console.log("O resultado final ainda não é o esperado, porem falta pouco!");
}else if(resultado==50){
    console.log("Parabéns você venceu essa batalha! Se continuar assim terá uma melhor qualidade de vida!");
}
console.log();