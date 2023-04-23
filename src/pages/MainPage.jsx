import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { useDispatch } from "react-redux/es/exports";
import { removeUser } from "store/slices/userSlice";

export default function MainPage() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <button
        onClick={() => dispatch(removeUser())}
        className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Log out from {email}
      </button>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
