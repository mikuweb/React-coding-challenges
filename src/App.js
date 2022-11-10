import { HelloName } from "./components/HelloName";
import { HelloWorld } from "./components/HelloWorld";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloName name={"MIKU"} />
    </div>
  );
}
