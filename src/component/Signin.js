import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const matchingUser = users.find(
            (user) =>
                user.userName === data.userName && user.password === data.password
        );

        if (matchingUser) {
            localStorage.setItem("token","sdfsd3134564@")
            Swal.fire({
                icon: 'success',
                text: 'Login successful!',
            })
            navigate("/dashboard");
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Login failed. Please check your username and password.',
            })
        }
    };
    return (
        <div className="signin-page">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>SIGN IN</h3>
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
                    <button className="login-btn" type="submit">Login</button>
                </div>
            </form>
            <br />
            <p>if you have no Account please <Link to="/signup">SignUp</Link></p>
        </div>
    )
}

export default Signin;


