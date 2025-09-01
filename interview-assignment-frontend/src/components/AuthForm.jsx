import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function AuthForm({ onAuthSuccess }) {
  const [authForm, setAuthForm] = useState({
    username: "",
    password: "",
    role: "user",
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/api/v1/user/login" : "/api/v1/user/register";
      const response = await axiosInstance.post(endpoint, authForm);
      onAuthSuccess(response.data.data.user || response.data.data);
      setAuthForm({ username: "", password: "", role: "user" });
    } catch (error) {
      alert(error.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleAuth} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={authForm.username}
          onChange={(e) =>
            setAuthForm({ ...authForm, username: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={authForm.password}
          onChange={(e) =>
            setAuthForm({ ...authForm, password: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
        {!isLogin && (
          <select
            value={authForm.role}
            onChange={(e) => setAuthForm({ ...authForm, role: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="user">User</option>
          </select>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="ml-2 text-blue-500 hover:underline"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
