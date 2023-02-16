import "./App.scss"
import ColumnLeft from "./components/columnLeft"
import MiddleColumn from "./components/middleColumn"
import RightColumn from "./components/rightColumn"

function App() {
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-slate-400 bg-opacity-40">
        <div className=" w-11/12 flex bg-slate-100 rounded-xl my-5">
            <ColumnLeft />
            <MiddleColumn />
            <RightColumn />
        </div>
    </div>
  );
}

export default App;
