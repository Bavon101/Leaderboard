const scoresList = document.getElementById('scores-list');
const scores = [
  {
    name: 'Akumu Bavon',
    score: 100,
  },
  {
    name: 'Jon Snow',
    score: 107,
  },
];
const addScoreItem = (s = {}, i) => {
  const scoreItem = document.createElement('li');
  scoreItem.innerHTML = `${s.name} : ${s.score}`;
  scoreItem.style.backgroundColor = i % 2 ? 'aliceblue' : 'white';
  scoresList.appendChild(scoreItem);
};

const showScores = (refresh = false) => {
  if (refresh) {
    scoresList.replaceChildren();
  }
  scores.map((s, i) => {
    addScoreItem(s, i);
    return scoresList;
  });
};

const addScore = () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  document.getElementById('form').reset();
  const data = { name, score };
  scores.push(data);
  addScoreItem(data, (scores.length - 1));
};

const init = () => {
  showScores();
  document.getElementById('refresh-btn').onclick = () => showScores(true);
  document.getElementById('form').addEventListener('submit', addScore);
};

export default init;