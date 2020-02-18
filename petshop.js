let pets = [{nome: "Batman"}, {nome: "Costelinha"}];

const listarPets = () => {
    let conteudo = "";

    for (let pet of pets) {
        conteudo += `
        -------------
        ${pet.nome}
        -------------`;

    }
    return conteudo;
};

const adicionarPet = (novoPet) => {
   return pets.push(novoPet);
};

const buscarPets = (nomePet) => {
  const petsEncontrados = pets.filter (pet => {
    return pet.nome == nomePet;
  });
  return petsEncontrados;
}


module.exports = { listarPets, adicionarPet, buscarPets  };