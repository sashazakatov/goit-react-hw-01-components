import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList'
import TransactionHistory from 'components/TransactionHistory'
import user from 'data/user.json'
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        gap: 10,
      }}
    >
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar} 
        stats={user.stats}
      />
      <Statistics title="Title" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
