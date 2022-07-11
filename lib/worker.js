addEventListener('message', (e) => {
  const [a, b] = e.data;
  postMessage({
    type: 'result',
    result: a * b,
  });
});
