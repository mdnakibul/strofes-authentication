import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const VerifyOTP = () => {
    const [userInfo,setUserInfo] = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const resendOTP = ()=>{
        const resendOTPData = {
            phone: userInfo.phone,
            type: 'verification'
        }
        console.log('got otp resend request',resendOTPData);

        fetch('https://strofesapps.live/challenge/user/resend-otp',{
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
                <div className="col-md-12 d-flex justify-content-center">
                    <form style={{maxWidth:'300px'}} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter The Code (OTP)</label>
                            <input type="number" {...register("otp", { required: true })} className="form-control" id="phone-number"  placeholder="Enter the code" />
                            {errors.otp && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Verify Phone Number</button>
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

export default VerifyOTP;