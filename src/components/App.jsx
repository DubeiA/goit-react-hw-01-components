import user from "../user.json"
import data from "./Statistics/data.json";
import { Profiles } from "./Profiles/Profiles"
import { Statistics } from "./Statistics/Statistics";



console.log(data);
export const App = () => {
  return (
    
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "end",

      gap: "15px"
      
        // padding: "12px 16px",
        
        
      }}>
      <Profiles avatar={user.avatar} tag={user.tag} username={user.username}
      location={user.location} followers={user.stats.followers } likes={user.stats.likes } views={user.stats.views }/>
    
    
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    
    </div>
  );
};
