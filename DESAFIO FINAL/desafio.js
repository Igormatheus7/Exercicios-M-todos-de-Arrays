let alunos = [
    "Mariana",
    "Rafael",
    "Camila",
    "Pedro",
    "Larissa",
    "Matheus",
    "Beatriz",
    "Thiago",
    "Isabela",
    "Vinicius"
];

// 1 - Verificar se um aluno existe
console.log("Aluno existe:", alunos.includes("Camila"));

// 2 - Encontrar posição de um aluno
console.log("Posição do aluno:", alunos.indexOf("Pedro"));

// 3 - Criar uma parte da lista
let parte = alunos.slice(0, 5);
console.log("Parte da lista:", parte);

// 4 - Remover aluno
alunos.splice(alunos.indexOf("Rafael"), 1);
console.log("Aluno removido:", alunos);

// 5 - Inserir aluno
alunos.splice(2, 0, "Gabriela");
console.log("Aluno inserido:", alunos);

// 6 - Ordenar alunos
alunos.sort();
console.log("Alunos ordenados:", alunos);

// 7 - Inverter lista
alunos.reverse();
console.log("Lista invertida:", alunos);

// 8 - Exibir lista como texto
console.log("Lista de alunos:", alunos.join(", "));