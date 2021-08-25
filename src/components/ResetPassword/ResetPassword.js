import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        const resetPassData = {
            phone: data.phone,
            otp: data.otp,
            password: data.password,
        }
        if (data.password === data.confirmPassword) {
            console.log('pass matched');
            fetch('https://strofesapps.live/challenge/user/forgot-password/3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resetPassData)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === true){
                    history.push('/login')
                }else{
                    alert(result.message);
                }
            })
        } else {
            alert("Password doesn't match");
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h2 className="text-center">Enter Your New Password Here</h2>
                    <form style={{ maxWidth: '300px' }} className="d-block m-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter Your Phone Number</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" id="phone-number" placeholder="Enter phone number" />
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter OTP</label>
                            <input type="number" {...register("otp", { required: true })} className="form-control" id="otp" placeholder="Enter OTP" />
                            {errors.otp && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter New Password</label>
                            <input type="password" {...register("password", { required: true })} className="form-control" id="password" placeholder="Enter New Password" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm New Password</label>
                            <input type="password" {...register("confirmPassword", { required: true })} className="form-control" id="confirm-password" placeholder="Confirm New Password" />
                            {errors.confirmPassword && <span>This field is required</span>}
                        </div>
                        <input type="submit" value="Verify OTP" className="btn btn-primary mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;