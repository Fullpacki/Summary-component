import Button from "./components/Button";
import Results from "./components/Header";
import Summary from "./components/Container";

function App() {
  return (
    <div className="App flex flex-col max-w-2xl mx-auto xl:bg-white xl:rounded-xl xl:flex-row xl:w-full xl:shadow-2xl xl:shadow-[#4c37f4]/30">
      <Results />
      <div className="flex flex-col xl:w-1/2 xl:rounded-xl  xl:py-4 ">
        <Summary />
        <Button />
      </div>
    </div>
  );
}

export default App;
