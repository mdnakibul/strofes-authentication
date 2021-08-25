import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const ForgetPass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data =>{
        console.log(data);
        fetch(`https://strofesapps.live/challenge/user/forgot-password/1`,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(fogetPassData => {
            console.log(fogetPassData);
            if(fogetPassData.status === false){
                alert(fogetPassData.message);
            }else{
                history.push('/verify-otp')
            }
        })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mb-3">Enter your phone number to reset password</h2>
                    <form style={{ maxWidth: '300px' }} className="d-block m-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter Your Phone Number</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" id="phone-number" placeholder="Enter phone number" />
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <input type="submit" value="Get OTP" className="btn btn-primary mt-3" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ForgetPass;