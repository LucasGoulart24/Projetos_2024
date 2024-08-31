// Aula de Javascript - exemplo de if e else
// Nota
let nota = prompt('Digite a nota do aluno:')
let media = 5

// Falta
let falta = prompt('Digite o número de faltas do aluno')
let falta_maxima = 12

if (nota >= media && falta <= falta_maxima){
    document.write('Aprovado!')
}else{
    document.write('Reprovado!')
}