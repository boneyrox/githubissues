import Result from "./components/Result";
import Search from "./components/Search";
import { useState } from 'react';


function App() {

  const[user,setUser]=useState();
  const[repo,setRepo]=useState()

  function handleClick(user,repo){
    setUser(user);
    setRepo(repo);
  }
  
  return (
    <div className="App">
      <Search handleClickProp={handleClick} />
      <Result userProp={user} repoProp={repo} />
    </div>
  );
}

export default App;
