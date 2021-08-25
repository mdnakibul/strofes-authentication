import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Products from '../Products/Products';

const UserProfile = () => {
    // Get UserContext 
    const [userInfo,] = useContext(UserContext)
    // Get user's profile 
    const [userProfile,setUserProfile] = useState({})
    fetch('https://strofesapps.live/challenge/user/profile',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'token' : userInfo.token,
        },
    }).then(res => res.json())
    .then(data =>{
        setUserProfile(data);
        console.log(userProfile);
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center pt-5">Welcome Back!</h2>
                </div>
            </div>

            <h2 className="text-center mt-5">Buy Some Products!</h2>
            <Products/>
        </div>
    );
};

export default UserProfile;