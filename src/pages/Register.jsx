import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import authInstanse from "../Networking/authInstanse";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegistr = async (values) => {
    try {
      setLoading(true);
      const { data } = await authInstanse.post("signup", values);
      if (data.message) {
        toast.success(data.message, {
          duration: 2000,
          className: "text-success px-4 fw-bolder",
        });
        setLoading(false);
        navigate("/login");
        formik.resetForm();
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        className: "text-danger px-4 fw-bolder",
      });
      setLoading(false);
      formik.resetForm();
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name Must Be More than 3 Characters")
      .max(15, "Name Must Be Less than 15 Characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be a Valid"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone Number Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
    rePassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Password and Repassword Not Matched"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleRegistr,
  });

  return (
    <div className=" w-75 mx-auto mt-100">
      <h1>Register</h1>
      <form className=" mt-5" onSubmit={formik.handleSubmit}>
        <div className="form-group">
        <div className="row">

    <div className="col-md-6">
    <label className=" form-label" htmlFor="name">
            Name
          </label>
          <input
            className=" form-control mb-4 mt-2"
            type="text"
            name="name"
            id="name"
            placeholder='Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <small className="text-danger d-block mb-3">
              {formik.errors.name}
            </small>
          ) : null}

          <label className=" form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className=" form-control mb-4 mt-2"
            type="email"
            name="email"
            id="email"
            placeholder='Email Address'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
    {formik.errors.email && formik.touched.email ? (
            <small className="text-danger d-block mb-3">
              {formik.errors.email}
            </small>
          ) : null}


    </div>


      <div className="col-md-6">
      <label className=" form-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className=" form-control mb-4 mt-2"
            type="tel"
            name="phone"
            id="phone"
            placeholder='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <small className="text-danger d-block mb-3">
              {formik.errors.phone}
            </small>
          ) : null}

          <label className=" form-label" htmlFor="password">
            Password
          </label>
          <input
            className=" form-control mb-4 mt-2"
            type="password"
            name="password"
            id="password"
            placeholder='password'
            autoComplete="false"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <small className="text-danger d-block mb-3">
              {formik.errors.password}
            </small>
          ) : null}
      </div>



        </div>
          

      

         

          <label className=" form-label" htmlFor="repassword">
            Repassword
          </label>
          <input
            className=" form-control mb-4 mt-2"
            type="password"
            name="rePassword"
            id="rePassword"
            autoComplete="false"
            placeholder='Repassword'
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <small className="text-danger d-block mb-3">
              {formik.errors.rePassword}
            </small>
          ) : null}

          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className=" btn btn-outline-info fw-bolder px-4 my-2 "
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm text-white"></span>
            ) : (
              "Register"
            )}
          </button>

          <h5 className='py-3'>Already have an account ? { }
        <Link to="/login">
        <span>Sign In</span>
        </Link>
        </h5>



        </div>
      </form>
    </div>
  );
};

export default Register;
