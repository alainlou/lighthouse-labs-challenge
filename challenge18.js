const countTickets = (tickets) => {
  counts = {
    'red': 0,
    'green': 0,
    'blue': 0
  }
  for(let ticket of tickets) {
    counts[ticket]++
  }
  return counts
}

const bestOdds = (tickets, raffleEntries) => {
  counts = countTickets(tickets)
  best = ['red', -1]
  for(let entry in raffleEntries) {
    let odds = counts[entry]/raffleEntries[entry]
    if(odds > best[1]) {
      best = [entry, odds]
    }
  }
  return "You have the best odds of winning the " + best[0] + " raffle."
}
