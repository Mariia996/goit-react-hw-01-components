import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Profile from './components/Profile-card/Card';
import Statistics from './components/Statistics/StatisticsTemp';
import FriendList from './components/MyFriends/friendsList';
import TransactionHistory from './components/Transaction/Transactions';

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
      </div>
  );
}

export default App;
