import SignUp from "components/sign-up";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Register</h1>
      <SignUp />
      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}
