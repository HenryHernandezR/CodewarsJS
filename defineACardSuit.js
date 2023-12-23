function defineSuit(card) {
  
    let suit = card.substr(-1);
      switch (suit){
      case '♣': return 'clubs'.toLowerCase();
          break;
      case '♦': return 'diamonds'.toLowerCase();
          break;
      case '♥': return 'hearts'.toLowerCase();
          break;
       case'♠': return 'spades'.toLowerCase();
          break;
          default: return 'clubs'.toLowerCase();
          }
  }