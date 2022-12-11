import user from "../user.json"
import data from "./Statistics/data.json";
import friends from "./Friends/friends.json"
import transactions from "./Transaction/transactions.json";
import {Profiles} from "./Profiles/Profiles"
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendsList";
import { TransactionHistory } from "./Transaction/Transaction";



console.log(transactions);

export const App = () => {
  return (
    
    <div style={{
      display: "flex",
      
      flexDirection: "column",
      gap: "15px"
      
        // padding: "12px 16px",
        
        
      }}>

      <Profiles
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
    
    
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />


      <TransactionHistory items={transactions} />
    
    </div>
  );
};
