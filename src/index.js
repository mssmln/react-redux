// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
const {createStore} = require('redux');



// Getting Started with React Redux
/*
React is a view library that you provide with data, then it renders the view in an efficient, predictable way. 
Redux is a state management framework that you can use to simplify the management of your application's state. 
Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. 
Your React components subscribe to only the pieces of data in the store that are relevant to their role. 
Then, you dispatch actions directly from React components, which then trigger store updates.

Although React components can manage their own state locally, when you have a complex app, 
it's generally better to keep the app state in a single location with Redux. 
There are exceptions when individual components may have local state specific only to them. 
Finally, because Redux is not designed to work with React out of the box, you need to use the react-redux package. 
It provides a way for you to pass Redux state and dispatch to your React components as props.
*/

// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: "",
//       messages: []
//     }
//   }
//   render() {
//     return <div />
//   }
// };
// ReactDOM.render(<DisplayMessages />, document.getElementById('Getting-Started-with-React-Redux'));


// -------------------------------------------------------------------------------------



// Manage State Locally First
// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//   }
//   handleChange(e){
//     this.setState({
//       input: e.target.value
//     })
//   }

//   submitMessage(){
//     this.setState({
//       input: '', 
//       messages: [...this.state.messages, this.state.input] 
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
//         <button onClick={this.submitMessage.bind(this)}>Submit</button>
//         <ul>{this.state.messages.map(el => <li key={el}>{el}</li>)}</ul>
//       </div>
//     );
//   }
// };
// ReactDOM.render(<DisplayMessages />, document.getElementById('Manage-State-Locally-First'));


// -------------------------------------------------------------------------------------



// Extract State Logic to Redux
/*
Now that you finished the React component, you need to move 
the logic it's performing locally in its state into Redux. 
This is the first step to connect the simple React app to Redux. 
*/

// const ADD = 'ADD';

// const messageReducer = (state = [], action) => {
//   switch(action.type) {
//     case ADD:
//       return [action.message];
//     default:
//       return state;
//   }
// }; 

// const addMessage = message => ({type: ADD, message});
// const store = createStore(messageReducer);
// console.log(store.getState());
// store.dispatch(addMessage('dispatched!'));
// console.log(store.getState());


// -------------------------------------------------------------------------------------



// Use Provider to Connect Redux to React
/*
In the last challenge, you created a Redux store to handle the messages array and 
created an action for adding new messages. The next step is to provide React access 
to the Redux store and the actions it needs to dispatch updates. 
React Redux provides its react-redux package to help accomplish these tasks.

React Redux provides a small API with two key features: Provider and connect. 
Another challenge covers connect. The Provider is a wrapper component from React Redux 
that wraps your React app. This wrapper then allows you to access the Redux store 
and dispatch functions throughout your component tree. Provider takes two props, 
the Redux store and the child components of your app. 
*/

// Redux:
// const ADD = 'ADD';

// const addMessage = message => ({type: ADD, message});

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [action.message];
//     default:
//       return state;
//   }
// };

// const store = createStore(messageReducer);
// console.log(store.getState());
// store.dispatch(addMessage('dispatched!'));
// console.log(store.getState());

// // React:
// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {  
//     this.setState((state) => {
//       const currentMessage = state.input;
//       return {
//         input: '',
//         messages: state.messages.concat(currentMessage)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input value={this.state.input} onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>{this.state.messages.map(message => <li key={message}>{message}</li>)}</ul>
//       </div>
//     );
//   }
// };

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <DisplayMessages />
//       </Provider>
//     );
//   }
// };
// ReactDOM.render(<AppWrapper />, document.getElementById('Use-Provider-to-Connect-Redux-to-React'));


// -------------------------------------------------------------------------------------



// Map State to Props
/*
The Provider component allows you to provide state and dispatch to your React components, 
but you must specify exactly what state and actions you want. 
This way, you make sure that each component only has access to the state it needs. 
You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().

In these functions, you declare what pieces of state you want to have access to 
and which action creators you need to be able to dispatch. 
Once these functions are in place, you'll see how to use the React Redux connect method 
to connect them to your components in another challenge.

Note: Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().
*/

// const state = [];

// const mapStateToProps = state => ({messages: state});


// -------------------------------------------------------------------------------------



// Map Dispatch to Props
/*
The mapDispatchToProps() function is used to provide specific action creators to your React components 
so they can dispatch actions against the Redux store. It's similar in structure to the mapStateToProps() 
function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, 
which become component props. However, instead of returning a piece of state, each property returns a 
function that calls dispatch with an action creator and any relevant action data. 
You have access to this dispatch because it's passed in to mapDispatchToProps() as a parameter 
when you define the function, just like you passed state to mapStateToProps(). 
Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps(). 
This is similar to how it uses store.subscribe() for components that are mapped to state.
*/

// const addMessage = message => ({type: 'ADD', message});

// const mapDispatchToProps = dispatch => ({submitNewMessage: message => dispatch(addMessage(message))});


// -------------------------------------------------------------------------------------



// Connect Redux to React
/*
Now that you've written both the mapStateToProps() and the mapDispatchToProps() functions, 
you can use them to map state and dispatch to the props of one of your React components. 
The connect method from React Redux can handle this task. This method takes two optional arguments, 
mapStateToProps() and mapDispatchToProps(). They are optional because you may have a component that only 
needs access to state but doesn't need to dispatch any actions, or vice versa.

To use this method, pass in the functions as arguments, and immediately call the result with your component. 

Note: If you want to omit one of the arguments to the connect method, you pass null in its place.
*/

// const addMessage = message => ({type: 'ADD', message});

// const mapStateToProps = state => ({messages: state});

// const mapDispatchToProps = dispatch => ({submitNewMessage: message => dispatch(addMessage(message))});

// class Presentational extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h3>This is a Presentational Component</h3>
//   }
// };

// const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
// ReactDOM.render(ConnectedComponent, document.getElementById('Connect-Redux-to-React'));


// -------------------------------------------------------------------------------------



// Connect Redux to the Messages App
/*
Now that you understand how to use connect to connect React to Redux, 
you can apply what you've learned to your React component that handles messages.

In the last lesson, the component you connected to Redux was named Presentational, 
and this wasn't arbitrary. This term generally refers to React components that are not 
directly connected to Redux. They are simply responsible for the presentation of UI and 
do this as a function of the props they receive. 
By contrast, container components are connected to Redux. These are typically responsible 
for dispatching actions to the store and often pass store state to child components as props.
*/

// // Redux:
// const ADD = 'ADD';

// const addMessage = message => ({type: ADD, message});

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [action.message];
//     default:
//       return state;
//   }
// };

// const store = createStore(messageReducer);

// // React:
// class Presentational extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {
//     this.setState((state) => {
//       const currentMessage = state.input;
//       return {
//         input: '',
//         messages: state.messages.concat(currentMessage)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input value={this.state.input} onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>{this.state.messages.map(message => <li key={message}>{message}</li>)}</ul>
//       </div>
//     );
//   }
// };

// // React-Redux:
// const mapStateToProps = state => ({messages: state});

// const mapDispatchToProps = dispatch => ({submitNewMessage: newMessage => dispatch(addMessage(newMessage))});

// const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// class AppWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <Provider store={store}>
//         <Container />
//       </Provider>
//     );
//   }
// };
// ReactDOM.render(<AppWrapper />, document.getElementById('Connect-Redux-to-the-Messages-App'));


// -------------------------------------------------------------------------------------



// Extract Local State into Redux
/*
You're almost done! Recall that you wrote all the Redux code so that Redux could control 
the state management of your React messages app. Now that Redux is connected, you need to 
extract the state management out of the Presentational component and into Redux. 
Currently, you have Redux connected, but you are handling the state locally within the Presentational component.
*/

// Redux:
const ADD = 'ADD';

const addMessage = message => ({type: ADD, message});

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [action.message];
    default:
      return state;
  }
};

const store = createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.props.messages.map(message => <li key={message}>{message}</li>)}</ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = state => ({messages: state});

const mapDispatchToProps = dispatch => ({submitNewMessage: message => dispatch(addMessage(message))});

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
ReactDOM.render(<AppWrapper />, document.getElementById('Extract-Local-State-into-Redux'));