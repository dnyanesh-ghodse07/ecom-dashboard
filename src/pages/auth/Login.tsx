import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import { loginUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<typeof store.dispatch>();

  const { user, error} = useSelector(
    (state: RootState) => state.auth
  ) as {
    user: { name: string } | null;
    isLoading: boolean;
    error: string | null;
  };

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    navigate("/dashboard");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-between">
      <div className="w-1/2 hidden md:block bg-pink-50">
        <h1 className="my-2 text-4xl p-4 font-bold text-pink-900">HerCart 💅🏻</h1>
        <img src="../../assets/login-page.webp" alt="" />
      </div>
      <div className="md:w-1/2 w-full p-4 flex justify-center items-center flex-col">
        <div>
          <h1 className="my-4 text-2xl font-bold">Welcome Back, Admin!</h1>
          <h2 className="text-2xl my-4">Login</h2>
          <input
            className="p-2 w-full border my-2"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 w-full border my-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="my-2 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </p>
          <button
            className="p-2 bg-blue-500 text-white w-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <h1 className="text-center my-2 text-xl">
            {error && <p>{error}</p>}
            {user && user.name && <p>Welcome, {user.name}</p>}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <h2>Login</h2>
      <input className="p-2 w-full border my-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="p-2 w-full border my-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="p-2 bg-blue-500 text-white w-full" onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
      <h1 className="text-center my-2 text-xl">
      {error && <p>{error}</p>}
      {user && user.name && <p>Welcome, {user.name}</p>}
      </h1> */
}
