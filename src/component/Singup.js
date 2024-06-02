import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
             const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
             existingUsers.push(data);
             localStorage.setItem("users", JSON.stringify(existingUsers));
             Swal.fire({
                icon: 'success',
                text: 'User registered successfully!',
              })
              navigate("/");
      };

    return (
        <div class="signup">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>SIGN UP</h3>
                <div className="form-field">
                    <input type="text"
                     placeholder="Fullname"
                     {...register("fullName", {
                        required: true,
                      })}
                     />
                     {errors?.fullName?.type === "required" && <p className="error">Required*</p>}
                </div>
                <div className="form-field">
                    <input type="text"
                     placeholder="Username"
                    {...register("userName", {
                        required: true,
                      })}
                    />
                    {errors?.userName?.type === "required" && <p className="error">Required*</p>}
                </div>
                <div className="form-field">
                    <input type="text"
                     placeholder="Password"
                    {...register("password", {
                        required: true,
                      })}
                    />
                    {errors?.password?.type === "required" && <p className="error">Required*</p>}
                </div>
                <div className="form-field">
                    <input type="text"
                     placeholder="city"
                    {...register("city", {
                        required: true,
                      })}
                    />
                    {errors?.city?.type === "required" && <p className="error">Required*</p>}
                </div>
                <button className="login-btn" type="submit">SignUp</button>
            </form>
            <p>if you have Allready Account please <Link to="/">SignIn</Link></p>
        </div>
    )
}

export default SignUp;