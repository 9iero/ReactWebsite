import PropTypes from 'prop-types'

function UserGreeting({ isLoggedIn = false, username = 'Guest' }) {

    const welcomeMsg =  <h2 className="welcome-msg">
                        Welcome: {username}
                        </h2>
                        
    const logInMsg =    <h2 className="logIn-msg">
                        please log in
                        </h2>
  
    return (isLoggedIn ? welcomeMsg : logInMsg);
  }
  

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}


export default UserGreeting