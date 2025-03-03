import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulated login
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">RideSync Login</h1>
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Log In
      </button>
    </div>
  );
}
