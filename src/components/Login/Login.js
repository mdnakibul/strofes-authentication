import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    // Get UserContext 
    const [userInfo,setUserInfo] = useContext(UserContext);
    const history = useHistory();
    // User Login 
    const { register, handleSubmit, formState: { errors } } = useForm();

    // User login 
    const onSubmit = data => {
        let deviceInfo = {
            browser: navigator.appCodeName,
            os: navigator.platform
        };
        data = {...data, deviceId: MediaDeviceInfo.deviceId,deviceType:deviceInfo }
        console.log(data);
        fetch('https://strofesapps.live/challenge/user/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(loginData =>{
            if(loginData.status === true){
                setUserInfo({...userInfo, token: loginData.token});
                history.push('/user-profile')
            }else{
                alert(loginData.message)
            }
            console.log(loginData)
        })
        .catch(error =>{
            console.log(error.message)
        })
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-5">
                    <h2 className="text-center">Login With Your Credential</h2>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px' }} className="d-block m-auto">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Phone</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" id="phone" />
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" {...register("password", { required: true })} className="form-control" id="password" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> <span className="ms-4"> <Link to="/user/forget-password"> Forget Password?</Link></span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;