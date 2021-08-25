import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Register = () => {
    const [userInfo,] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Register user function 
    const onSubmit = (data) => {
        data = {...data, type: "verification"};
        console.log(data);
        fetch('https://strofesapps.live/challenge/user/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(registerData => {
            console.log(registerData);
            if(registerData.status === false){
                alert(registerData.message, registerData.error)
            }else if(registerData.status === true){
                
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    // Resend OTP Function 
    const resendOTP = () => {
        const resendOTPData = {
            phone: userInfo.phone,
            type: 'verification'
        }
        console.log('got otp resend request', resendOTPData);

        fetch('https://strofesapps.live/challenge/user/resend-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resendOTPData)
        }).then(res => res.json())
            .then(serverData => {
                console.log(serverData);
                if (serverData.status === true) {
                    alert('OTP sent successfully')
                }
            })
            .catch(err => {
                alert('There was an error. Please try again later')
            })

    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mb-4">Register Here</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" {...register("firstname", { required: true })} className="form-control" id="first-name" placeholder="Enter First Name" />
                            {errors.firstname && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" {...register("lastname", { required: true })} className="form-control" id="last-name" placeholder="Enter Last Name" />
                            {errors.lastname && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="emial" {...register("email", { required: true })} className="form-control" id="email" placeholder="Enter Your Email" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" {...register("phone", { required: true })} defaultValue={userInfo.phone} className="form-control" id="phone" placeholder="Enter Your Phone Number" />
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter The Code (OTP)</label>
                            <input type="number" {...register("otp", { required: true })} className="form-control" id="phone-number" placeholder="Enter the code" />
                            {errors.otp && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordr">Enter New Password For Your Account</label>
                            <input type="password" {...register("password", { required: true })} className="form-control" id="password" placeholder="Enter New Password" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 w-100">Register</button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center mt-5">
                        <p>Don't get any sms? <button className="btn btn-info" onClick={resendOTP}>Resend it</button></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;