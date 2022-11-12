import { AllCalculations } from "./components/AllCalculations";
import { CreateRandomShape } from "./components/CreateRandomShape";
import { HelloName } from "./components/HelloName";
import { HelloWorld } from "./components/HelloWorld";
import { NTuple } from "./components/NTuple";
import { RandomNumber } from "./components/RandomNumber";
import { RandomNumberAutoUpdate } from "./components/RandomNumberAutoUpdate";
import { Shape } from "./components/Shape";
import { Toggle } from "./components/Toggle";
import { Triple } from "./components/Triple";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloName name={"MIKU"} />
      <RandomNumber />
      <RandomNumberAutoUpdate />
      <Triple>
        <div>Hey!</div>
      </Triple>
      <br />
      <CreateRandomShape />
      <br />
      <NTuple>Welcome🌷</NTuple>
      <br />
      <br />
      <Toggle>🍎🍌🍒🍓🫐🍅🍊</Toggle>
      <br />
      <Toggle>🍦🍨🍩🍪🍰🍬🍮</Toggle>
      <br />
      <br />
      <AllCalculations a={1} b={2} />
      <Shape shape={"〇"} />
    </div>
  );
}
