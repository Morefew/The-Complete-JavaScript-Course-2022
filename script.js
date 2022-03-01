function gameMatch(){
  let dolphinsScore = [77, 95, 115];
  let dolphinsAverage = dolphinsScore.reduce(
  (accumulator, currentValue) => (accumulator + currentValue) / dolphinsScore.length);
  
  let koalasScore = [95, 89, 111];
  let koalasAverage = koalasScore.reduce(
  (accumulator, currentValue) => (accumulator + currentValue) / koalasScore.length);
  
    if (dolphinsAverage < koalasAverage) {
    result = "Koalas are the Winners";
    } else if (dolphinsAverage > koalasAverage){
    result = "Dolphins are the Winners";
    } else {
    result = "Game is a Draw";
    }
  
  return result;
  }
  
  gameMatch()