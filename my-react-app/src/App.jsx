import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColourPicker from './ColourPicker.jsx'


function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}]

    return(
      <>
        <Card/>
        <UserGreeting isLoggedIn={true} username="piero"/>
        <Button/>
        <ColourPicker/>
        <Student name="piero" age={21} isStudent={true}/>
        <MyComponent/>
        <Counter/>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
        <Footer/>
      </>
    );
}

export default App
