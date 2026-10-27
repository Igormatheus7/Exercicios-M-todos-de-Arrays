let playlist = [
    "Envolver",
    "Faz um Milagre em Mim",
    "Dançarina",
    "Leão",
    "Nosso Quadro",
    "Piloto",
    "Erro Gostoso",
    "Zona de Perigo"
];

// Verifica se a música existe
console.log("A música existe?", playlist.includes("Leão"));

// Descobre a posição
console.log("Posição:", playlist.indexOf("Leão"));

// Cria uma seleção de músicas
let selecao = playlist.slice(0, 3);
console.log("Seleção:", selecao);

// Remove uma música
playlist.splice(playlist.indexOf("Piloto"), 1);

// Ordena a playlist
playlist.sort();

// Inverte a playlist
playlist.reverse();

// Exibe a playlist final
console.log("Playlist final:", playlist.join(", "));