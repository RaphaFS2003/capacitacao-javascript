//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente
let notas = [10,9,10,9,10,10];
let media = 0;

for(let i=0 ;i<6; i++){
    media += notas[i];
}
media /= 6;

console.log(media);