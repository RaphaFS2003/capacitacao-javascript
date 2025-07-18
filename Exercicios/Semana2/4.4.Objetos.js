//Declare um objeto para representar seu personagem favorito
//Seja criativo com as propriedades

//Transforme os dois vetores de Arrays.js em um objeto
//Cada matéria representará uma propriedade do objeto,
//com sua nota correspondente sendo o valor associado a essa propriedade.

let personagem = 
{
    nome: "Edward Elric" ,
    apelido: "Alquimista de Aço",
    abilidades: ["Alquimia sem círculo de transmutação","combate corpo a corpo","e consegue passar por lugares apertados ksks"]

};

let materias = ["ELTA01A","FIS322","FIS320","ECOP14","ECOP04","ECOP13A"];
let notas = [10,9,10,9,10,10];  


const objeto = {};
materias.forEach((materia, index) => {
  objeto[materia] = notas[index];
});

console.log(objeto);