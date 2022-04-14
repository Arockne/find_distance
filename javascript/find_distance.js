function findDistance(graph, vertexA, vertexB) {
  const queue = [[0, vertexA]]
  const seen = new Set();

  while(queue.length) {
    const [distance, vertex] = queue.shift();

    if (vertex === vertexB && distance > 0) {
      return distance;
    }

    if (seen.has(vertex)) {
      continue;
    }
    
    for (const element of graph[vertex]) {
      queue.push([distance+1, element])
    }
    
    seen.add(vertex)
  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: ["dave"],
    carl: ["jambaby"],
    dave: [],
    heather: [],
  };

  console.log("Expecting: 1");
  console.log(findDistance(graph, "jan", "heather"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));

  console.log("");

  console.log("Expecting: 3");
  console.log(findDistance(graph, "jan", "dave"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "jan", "jan"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
