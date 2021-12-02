import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';

const Profile = () => {
    const { user, logout, loginWithRedirect, isLoading } = useAuth0();

    const getUserDataFields = () => Object.entries(user);
    const getLoggedUserDisplay = () => (
        <>
            <h2 className="title border-bottom"><span>{user.name}</span></h2>
            <h3 className="border-bottom">Your data:</h3>
            <ul className="card-list border-bottom">
                {
                    getUserDataFields().map(([ field, value ]) =>  (
                    <li key={field}><b>{field}</b> : {value}</li>
                ))
                }
            </ul>
            <LogoutBtn logout={logout}/>
        </>
    );
    const getUnloggedUserDisplay = () => (
        <>
            <LoginBtn loginWithRedirect={loginWithRedirect} />
        </>
    );

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className="card">
            {
                user ?
                getLoggedUserDisplay() :
                getUnloggedUserDisplay()
            }
        </div>
    );
}

/*{ 
    "given_name": "Akira",
    "family_name": "Nozomi",
    "nickname": "art199798",
    "name": "Akira Nozomi",
    "picture": "https://lh3.googleusercontent.com/a-/AOh14GhX1QwH1vXecnZDaolAuWQSVIX61OaU-S3oRnWPvA=s96-c",
    "locale": "en-GB",
    "updated_at": "2021-10-30T18:43:42.830Z", 
    "email": "art199798@mail.ru", 
    "email_verified": true, 
    "sub": "google-oauth2|105104167434797773293" 
}*/

export default Profile;
