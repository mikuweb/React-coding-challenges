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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { facircle } from "@fortawesome/free-regular-svg-icons";
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
      <NTuple amount={5}>Welcome๐ท</NTuple>
      <br />
      <br />
      <Toggle>๐๐๐๐๐ซ๐๐</Toggle>
      <br />
      <Toggle>๐ฆ๐จ๐ฉ๐ช๐ฐ๐ฌ๐ฎ</Toggle>
      <br />
      <br />
      <AllCalculations a={1} b={2} />
      <br />
      <Shape />
    </div>
  );
}
