export const getQueues = () => {
  return fetch("http://localhost:3000/queues")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};
