import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Getphone = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [userInfo,setUserInfo] = useContext(UserContext)
    const onSubmit = data => {
        data.type = 'verification';
        console.log(data);
        const serverURL = 'https://strofesapps.live/challenge';
        fetch(`${serverURL}/user/generate-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(serverData => {
                console.log(serverData);
                if (serverData.status === true) {
                    setUserInfo({
                        phone: data.phone,
                        otp: '',
                        type: ''
                      })
                    history.push('/verify-otp')
                }
            })
    };


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <form style={{ maxWidth: '300px' }} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="phone-number">Enter Your Phone Number</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" id="phone-number" placeholder="Enter phone number" />
                            <small id="phoneHelp" className="form-text text-muted">We'll never share your phone number with anyone else.</small>
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <input type="submit" value="Get OTP" className="btn btn-primary" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Getphone;