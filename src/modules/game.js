export default class Game {
  gameScores = {};

  gameName = 'The Walking Dead';

  gameId = 'SfnXixPrHikLvDkF1aQm';

  baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  addGame = async (score) => {
    const results = await fetch(`${this.baseUrl}games/${this.gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return results;
  };

  getScores = async () => {
    const scores = await fetch(`${this.baseUrl}games/${this.gameId}/scores/`, { method: 'GET' });
    this.gameScores = await scores.json();
    this.gameScores.result.sort((a, b) => b.score - a.score);
    return this.gameScores;
  }
}