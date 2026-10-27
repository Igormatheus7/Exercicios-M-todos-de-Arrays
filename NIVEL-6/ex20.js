let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

// Verifica se Café existe
console.log("Café existe?", produtos.includes("Café"));

// Descobre a posição de Café
console.log("Posição do Café:", produtos.indexOf("Café"));

// Cria uma cópia parcial
let selecao = produtos.slice(0, 3);
console.log("Cópia parcial:", selecao);

// Remove Leite
produtos.splice(produtos.indexOf("Leite"), 1);
console.log("Após remover Leite:", produtos);

// Transforma a lista em texto
console.log("Lista em texto:", produtos.join(", "));