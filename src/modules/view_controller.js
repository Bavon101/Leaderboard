import Game from './game.js';

const game = new Game();
const scoresList = document.getElementById('scores-list');
const addScoreItem = (s = {}, i) => {
  const scoreItem = document.createElement('li');
  scoreItem.innerHTML = `${s.user} : ${s.score}`;
  scoreItem.style.backgroundColor = i % 2 ? 'aliceblue' : 'white';
  scoresList.appendChild(scoreItem);
};

const showScores = async (refresh = false) => {
  if (refresh) {
    await game.getScores();
  }
  scoresList.replaceChildren();
  game.gameScores.result.map((s, i) => {
    addScoreItem(s, i);
    return scoresList;
  });
};

const addScore = async () => {
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  document.getElementById('form').reset();
  const data = { user, score };
  const addResult = await game.addGame(data);
  if (addResult.ok) {
    game.gameScores.result.push(data);
    addScoreItem(data, (game.gameScores.result.length - 1));
  }
};

const init = async () => {
  await game.getScores();
  showScores();
  document.getElementById('refresh-btn').onclick = () => showScores(true);
  document.getElementById('form').addEventListener('submit', addScore);
};

export default init;