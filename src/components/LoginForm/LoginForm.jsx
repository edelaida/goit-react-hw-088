import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { Form, Field, Formik } from "formik";
import { toast } from "react-hot-toast/headless";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values))
      .unwrap()
      .then((response) => {
        console.log(response);
        toast.success("Success!!!");
      })
      .catch((error) => {
        console.log(error);
      });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
