import './App.css';
import datainfo from './data/db.json'
import Mainbanner from './Banner'
function App() {
  return (
    <div className="App">
      <ul>
        {
          datainfo["gnb"].map((v,i)=>{ // datainfo.gnb.map 둘다 사용가능
            return(
                <li>
                  <a href={v.href}>{v.atext}</a>
                </li>
            )
          })
        }
      </ul>
      <Mainbanner></Mainbanner>
    </div>
  );
}

export default App;

