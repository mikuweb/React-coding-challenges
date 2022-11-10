import { HelloName } from "./components/HelloName";
import { HelloWorld } from "./components/HelloWorld";
import { RandomNumber } from "./components/RandomNumber";
import { RandomNumberAutoUpdate } from "./components/RandomNumberAutoUpdate";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloName name={"MIKU"} />
      <RandomNumber />
      <RandomNumberAutoUpdate />
    </div>
  );
}
