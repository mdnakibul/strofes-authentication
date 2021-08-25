import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const VerifyOTP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        data = {...data, type: 'forgot-password'}
        console.log(data);
        fetch('https://strofesapps.live/challenge/user/forgot-password/2',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.status === false){
                alert(result.message, result.error)
            }else{
                history.push('/user/reset-password');
            }
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="text-center mb-3">Enter your phone number and OTP here</h2>
                    <form style={{ maxWidth: '300px' }} className="d-block m-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter Your Phone Number</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" id="phone-number" placeholder="Enter phone number" />
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="otp">Enter OTP</label>
                            <input type="number" {...register("otp", { required: true })} className="form-control" id="otp" placeholder="Enter OTP" />
                            {errors.otp && <span>This field is required</span>}
                        </div>
                        <input type="submit" value="Verify OTP" className="btn btn-primary mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;