import Dashoard from "./components/Dashoard";
import Aside from "./layouts/Aside";
import Header from "./layouts/Header";
import SubAside from "./layouts/SubAside";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Aside />
          <SubAside />
        </div>
        <Dashoard />
      </div>
    </>
  );
}
export default App;