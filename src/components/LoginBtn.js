import React from 'react';

const styles = {
    login: {
        display: 'block',
        padding: '1em 0',
        color: 'white',
        fontSize: '0.7rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
        backgroundColor: '#097dea',
        margin: '1rem auto',
        width: '500px'
    },
};

const LoginBtn = (props) => {
    return (
        <button style={styles.login} onClick={() => props.loginWithRedirect()}>
            <b>Log In</b>
        </button>
    );
}

export default LoginBtn
