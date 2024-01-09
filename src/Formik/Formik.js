import { useFormik } from "formik";

export const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  onSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm({
      values: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
  },
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  },
});
