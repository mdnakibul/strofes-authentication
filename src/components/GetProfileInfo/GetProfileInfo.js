import React, { useContext } from 'react';
import { UserContext } from '../../App';

const GetProfileInfo = () => {
    const [userInfo,setUserInfo] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
            </div>
        </div>
    );
};

export default GetProfileInfo;