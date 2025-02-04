import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routers />
        {/* <Dashboard /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
