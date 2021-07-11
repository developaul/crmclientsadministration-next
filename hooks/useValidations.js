import { useFormik } from "formik"

const useValidations = (initialValues, validationSchema, onSubmit) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return [formik]
}

export default useValidations