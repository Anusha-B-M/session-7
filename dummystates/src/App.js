import React from 'react';
   import './App.css';
class App extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  

        let input = {};
        input["phone"] = "";
        input["Do you Love Coding"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;

      if (!input["phone"]) {

        isValid = false;

        errors["phone"] = "Please enter your phone number.";

      }

  

      if (typeof input["phone"] !== "undefined") {

          

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (!pattern.test(input["phone"])) {

          isValid = false;

          errors["phone"] = "Please enter only number.";

        }else if(input["phone"].length != 10){

          isValid = false;

          errors["phone"] = "Please enter valid phone number.";

        }
      }

          this.setState({

            errors: errors
    
          });
    
      
    
          return isValid;
    
      

      }
      render() {
  return (
    <center>
    <div className="App">
    <header className="App-header">
    <form onSubmit={this.handleSubmit}>
    
      <div class="form-group">
            <label for="Phone">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.phone}</div>
          </div>

       <hr/> 
       <label>
         Do you Love Coding:
           <div>
             <input onChange={this.handleChange} type="radio" value="Yes" name="Do you Love Coding"/> Yes
             <input onChange={this.handleChange} type="radio" value="No" name="Do you Love Coding"/> Female
            
           </div>
           </label>

  

    <div>
    <input type="submit" value="Submit" class="btn btn-success" />
</div>
    </form>
    </header>
   </div>
   </center>
   );
  
  
  }

}


        
export default App;