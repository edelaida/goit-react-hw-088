import css from "./UserForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  username: Yup.string().min(3, "Min 3 char!!!").required("Is required!!!"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Is required!!!"),
  comment: Yup.string().max(256, "Max 256 chars!!!").required("Is required"),
});

export default function UserForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "user",
        comment: "Default comment value",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.group}>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.group}>
          <label>Role:</label>
          <Field as="select" name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} name="select" component="span" />
        </div>
        <div className={css.group}>
          <label>Comment</label>
          <Field as="textarea" name="comment" />
          <ErrorMessage
            className={css.error}
            name="textarea"
            component="span"
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
