// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This code is the state of the App component. It is also the smart logic that will be passed on to child componenets and do the "hard" work from the functions. 
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.This code will change the state of UserInput with the value that will be typed in at the event (in this case the input from the return())
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. Deconstructs the state key "userInput" to be reused below much more efficiently. 
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Detects when the value of this.robot changes and calls the robot method.  */}
          onChange={ this.robot }
          {/* 5. userInput is assigned the value of whatever is typed in. */}
          value={ userInput }
        />

        <div>
          {/* 6. GoodRobot component is called and placed within div*/}
          <GoodRobot
            {/* 7. The value that was passed to the state through the Robot method by the input onChange and value  are then passed to the child component. The child component will accept the value that has been declared with props. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. The code below will be what is rendered through the GoodRobot Component and what will be displayed on the webpage.  
      <div>
        <h3>Good Robot</h3>
        {/* 9. The value that was created in the parent state object is being passed downt and being used by the child component using this.props.userInput.*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Exports the GoodRobot component and allows for it to be imported in the parent App.js file. 
export default GoodRobot
