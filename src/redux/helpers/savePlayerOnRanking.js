const savePlayerOnRanking = (avatar, name, score) => {
  // cria um objeto com as info. do jogador
  const player = {
    avatar,
    name,
    score,
  };

  // busca pela chave ranking no localStorage
  let ranking = JSON.parse(localStorage.getItem('ranking'));

  // valida se já existe um ranking no localStorage
  if (!ranking) ranking = [];

  // adiciona esse player no ranking
  ranking.push(player);

  // ordena a array de maneira decrescente
  const orderedRanking = ranking.sort((a, b) => b.score - a.score);

  // empurra pro localStorage o array de ranking
  localStorage.setItem('ranking', JSON.stringify(orderedRanking));
};

export const getRanking = () => JSON.parse(localStorage.getItem('ranking'));

export default savePlayerOnRanking;
