import "./styles.css";
import Divisio from "./Divisio";
export default function App() {
  let n1 = "2";
  let n2 = "5";
  return (
    <div className="App">
      <p>Resultat:</p>
      <Divisio numDiv1={n1} numDiv2={n2} />
    </div>
  );
}
