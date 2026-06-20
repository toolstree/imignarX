function createEmptyScores() {
  return {
    dominator: 0,
    analyzer: 0,
    heartkeeper: 0,
    freeSpirit: 0,
    explorer: 0,
    creator: 0,
    learnEarn: 0
  };
}

function calculateResults(scores) {

  const entries = Object.entries(scores);

  entries.sort((a, b) => b[1] - a[1]);

  const winner = entries[0];
  const runnerUp = entries[1];

  const winnerKey = winner[0];
  const winnerScore = winner[1];
  const runnerScore = runnerUp[1];

  let confidence = Math.round(
    (winnerScore / Math.max(1, winnerScore + runnerScore)) * 100
  );

  if (confidence < 60) confidence = 60;
  if (confidence > 99) confidence = 99;

  return {
    archetype: winnerKey,
    confidence,
    winnerScore,
    runnerScore,
    scores
  };
}

function addScores(answerScores, totalScores) {

  Object.keys(answerScores).forEach(key => {

    if (!totalScores[key]) {
      totalScores[key] = 0;
    }

    totalScores[key] += answerScores[key];

  });

  return totalScores;
}

function getArchetypeData(key) {

  return ARCHETYPES[key];

}

function getFunnelData(key) {

  return FUNNELS[key];

}
