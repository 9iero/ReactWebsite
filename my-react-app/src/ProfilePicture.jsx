
function ProfilePicture(){

    const imageUrl = './src/assets/ButtonPic.png'
    
    const handleClick = (e) => e.target.style.display = "none";
    
    return(<img onClick={(e) => handleClick(e)} className="redbutton" src={imageUrl}></img>);


}

export default ProfilePicture