import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
};

export default App;
