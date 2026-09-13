import PropTypes from 'prop-types';

function UserGreeting({isLoggedIn = false, Username = "Guest"}) {
    return (
        isLoggedIn ? <h2 className="welcome-message">Welcome {Username}</h2> : 
                     <h2 className="Login-prompt">Please Log In to Continue</h2>
    )
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    Username: PropTypes.string,
}

export default UserGreeting