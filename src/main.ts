
// crear una funcion que valide un palindromo ej: ana === ana

// const word:string = 'ono';

// const palindromo = (wordToRev:string) => {
//   const wordReversed:Array<string> = wordToRev.split("").reverse()
//   const newWord: string  = wordReversed.join("");

//   if (newWord === word) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }

// }


// dada una palabra, buscar en una frase y contar cunatas veces aparece 
// /la frase y palabra deven ser párametrode una funcion 

// const searchCoincideneses = (phrase:string , word:string) => {
//   const phraseSpliter = phrase.split(" ")
//   let counter = 0; 
//   phraseSpliter.forEach((wordToMatch) => {
//     if ( wordToMatch === word ) { return counter = counter + 1} 
// }
// )
// console.log(counter);
// }


//dada una cadena de texto, darle la vuelta para invertir el orden de 
// sus caracvteres sin usar metodos propios del leguaje solo estructuras de control 

// const inwardWord = (word:string ):string => {
//   let wordString:string = "";

//   for (const name of word) {
//     wordString = name + wordString
//   }
//   console.log(wordString);
// }


//cuanto es el x porciento de x numero 

// const totalPercentage = (number: number, percentage: number) => {
//   const quanity = percentage / 100 * number;
//   console.log(quanity)
// }

//dibujar un cuadrado con asterisco con huecos

// const squareSide = (size:number) => {

//   let side:string = ""

//   for (let i = 0; i < size; i++) {
//     side += "*";
//   }

//   return side
// } 

// const square = (sides: number) => {

//   let drawinSquare: string = squareSide(sides) + "\n";

//   let contenido: string = " ";

//   for( let i = 0;i < (sides - 2); i++) {
//     contenido = "*"

//     for(let x = 0; x < sides - 2; x++){

//       contenido += " "

//     }
//     contenido += "*"

//     drawinSquare += contenido + "\n"

//   }

//   drawinSquare += squareSide(sides)

//   return drawinSquare
// }

// dados dos numeros devolver cuantos numeros impares hay entre ellos

// const unpairNumber = (number1: number, number2: number) => {
//   let counter: number[] = [];

//   for (let i = number1; i < number2 + 1; i++) {
//     if ((i % 2) !== 0) {
//       counter.push(1)
//     }
//   }

//   console.log(counter.length);

// }

// const inwardNumber = (number1: number) => {

//   let invert: number = parseInt(
//     number1
//       .toString()
//       .split('')
//       .reverse()
//       .join('')
//   )
//   return invert 
// }


// dados dos arrays devolver Array con solo los elementos comunes entre ambos 

// const fusionArrays: any[] = (data1: number[], data2: number[]) => {

// const filtered: any[] =  data1.filter(element => {
//   return data2.includes(element)})
// console.log(filtered);
// }


const escalera = (number1: number) => {
  let stair: any[] = ""

  for (let level = 1; level <= number1; level++) {

    let escalones = "";

    for (let escalon = 0; escalon <= level; escalon++) {
      
      escalones += "[-]"

    }

    console.log(escalones);
    

  }

}

escalera(2)

// fusionArrays([1,2,3,4],[4,5,6,7])
// console.log( inwardNumber(321) );
//   unpairNumber(1,72);
// console.log(square(4));
// totalPercentage(75, 50) 
// inwardWord('perro')
// palindromo(word)
// searchCoincideneses('fox throt, throt fox', 'fox')