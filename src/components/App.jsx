import user from "../user.json"
import { Profiles } from "./Profiles/Profiles"

export const App = () => {
  return (
    
    <Profiles avatar={user.avatar} tag={user.tag} username={user.username}
      location={user.location} followers={user.stats.followers } likes={user.stats.likes } views={user.stats.views }/>
    
  );
};
