let counter = 0;

onmessage = event => {
    console.log("Worker received message:", ++counter);
};