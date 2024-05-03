import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiLogin } from "../../redux/auth/operations";

const MIN_PASS_VALID = 7;

const registerUser = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(
      MIN_PASS_VALID,
      `Your password must be greater than ${MIN_PASS_VALID} characters!`
    ),
});
const FORM_INITIAL = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(apiLogin(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL}
      validationSchema={registerUser}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Log in</h2>
        <br />
        <label>
          <span>email : </span>
          <br />
          <Field type="email" name="email" />
          <ErrorMessage component="p" name="email" />
        </label>
        <br />
        <label>
          <span>password : </span>
          <br />
          <Field type="password" name="password" />
          <ErrorMessage component="p" name="password" />
        </label>
        <br />
        <button type="submit">▶ Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
