import ProfilePicture from './ProfilePicture.jsx'

function Button(){

    const handleClick = (e) => e.target.textContent = "bomba";
        
    return(
        <>
        <button className="button" onClick={(e) => handleClick(e)}> hey listen! </button >
        </>
    );
}

export default Button