function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }


  function getChance(percentage) {
    var chance = getRandom(1, 100);
    if (chance < percentage) {            
        return true;
    } else {
        return false;
    }
}