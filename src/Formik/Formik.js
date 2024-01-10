import { useFormik } from "formik";
import * as Yup from "yup";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
const useLoginFormik = (hendleFormik) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Name must be at laet  chraters"),
      email: Yup.string().email("Invalit email address").required(),
      password: Yup.string()
        .required("Please enter password")
        .min(6, "Password must at leat 6 chracers")
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (hendleFormik) {
        hendleFormik(values);
      }
    },
  });
  return formik;
};

export default useLoginFormik;
