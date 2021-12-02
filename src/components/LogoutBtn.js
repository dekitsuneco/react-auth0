import React from 'react';

const styles = {
    logout: {
        display: 'block',
        padding: '1em 0',
        color: 'white',
        fontSize: '0.7rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
        backgroundColor: 'red',
        margin: '1rem auto',
        width: '500px'
    },
};

const LogoutBtn = (props) => {
    return (
        <button style={styles.logout} onClick={() => props.logout()}>
            <b>Log Out</b>
        </button>
    )
}

export default LogoutBtn;
