import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import authInstanse from "../Networking/authInstanse";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setUserData}=useContext(AuthContext)



  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const { data } = await authInstanse.post("signin", values);
      if (data.message) {
        toast.success(data.message, {
          duration: 2000,
          className: "text-success px-4 fw-bolder",
        });
        setLoading(false);
        localStorage.setItem("userToken", data.token)
        setUserData(data.token)
        navigate("/");
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
    email: Yup.string()
      .required("Email is required")
      .email("Email Must Be a Valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password Must Be More Than 6 Characters")
      .max(15, "Password Must Be Less Than 15 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
  
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className=" w-75 mx-auto login ">
      <h1>Login</h1>
      <form className=" mt-5" onSubmit={formik.handleSubmit}>
        <div className="form-group">
         
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

        
          <label className=" form-label" htmlFor="password">
            Password
          </label>
          <input
            className=" form-control mb-4 mt-2"
            type="password"
            name="password"
            id="password"
            autoComplete="false"
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <small className="text-danger d-block mb-3">
              {formik.errors.password}
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
              "Login"
            )}
          </button>


          <h5 className='py-4'>Don't have an account? { } 
         <Link to={'/register'}>
         <span >Register</span>
         </Link>
         </h5>

        </div>
      </form>
    </div>
  );
};

export default Login;
