function reachDestination(distance, speed) {
  let hour;
  let time = Math.round(2*distance/speed)/2;
  time === 1 ? hour = 'hour' : hour = 'hours'; 
  return `The train will be there in ${time} ${hour}.`;
}
