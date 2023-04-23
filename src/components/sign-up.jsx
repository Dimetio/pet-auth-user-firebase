import Form from "./form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setUser } from "store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e, email, password) => {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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

  return <Form title="register" handleSubmit={handleRegister} />;
}
