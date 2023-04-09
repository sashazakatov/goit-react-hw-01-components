import Profile from "./Profile";
import Statistics from "./Statistics";
import user from 'data/user.json'
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
      <Statistics title="fff" stats={data}/>
    </div>
  );
};
