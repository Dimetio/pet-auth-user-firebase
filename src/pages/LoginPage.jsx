import Login from "components/login";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Login</h1>
      <Login />
      <p className="text-center text-sm text-gray-500">
        or{" "}
        <Link
          to="/register"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          register
        </Link>
      </p>
    </>
  );
}
