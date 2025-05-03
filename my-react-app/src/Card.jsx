import profilePic from './assets/ReactPic.png'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <p className="card-text">Im learning React</p>
        </div>
    );
}

export default Card