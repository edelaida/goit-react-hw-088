import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiRegister } from "../../redux/auth/operations";

const MAX_NAME_VALID = 38;
const MIN_PASS_VALID = 7;

const registerUser = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(
      MAX_NAME_VALID,
      `Your user name must be less than ${MAX_NAME_VALID} characters!`
    ),
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
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL}
      validationSchema={registerUser}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Registration</h2>
        <label>
          <span>Name : </span>
          <br />
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
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
        <button type="submit">▶ Registration</button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
