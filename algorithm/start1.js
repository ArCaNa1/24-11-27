const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  const N = parseInt(inputLines[0], 10);

  const islands = [];
  
  for (let i = 1; i <= N; i++) {
    const [x, y] = inputLines[i].split(' ').map(Number);
    islands.push([x, y, i - 1]);
  }

  islands.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  const res = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    res[islands[i][2]] = N - i - 1;
  }

  // 결과 출력
  res.forEach((val) => console.log(val));
});
