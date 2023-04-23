import Form from "./form";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return <Form title="sign in" handleSubmit={handleLogin} />;
}
