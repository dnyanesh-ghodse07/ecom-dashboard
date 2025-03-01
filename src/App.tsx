import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { getCurrentUser } from "./redux/authSlice";


const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser()); // Check session on mount
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
