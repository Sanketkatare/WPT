import logo from './logo.svg';
import './App.css';
// import Demo from './demo';
// import Add from './addition';
// import Sub from './sub';
// import Ispal from './Ispalindrom';
// import MyClass from './UseClass';
// import CounterClass from './Counter';
// import LoginPage from './loginForm';
// import LifeCycle from './lifeCycle';
import DemoCallBack from './Callback';
import Callbackwithout from './WithoutCallBack'
import Error from './Errorhandling';
import MyLogin from './MyLogin';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div style={{ paddingLeft: "500px" }}>

      {/* <Demo></Demo>

      <div>
        <Add a={5} b={10}></Add>
        <br></br><Add a={Add} b={10}></Add>
      </div>

      <h2>
        <Sub num1={Demo} num2={4} ></Sub>
      </h2>

      <div>
      <Ispal num = {121}></Ispal>
    </div> 
    <MyClass></MyClass> <br>
      </br>
      <br></br>
      <CounterClass num1 = {0}></CounterClass>
      <LoginPage></LoginPage>
    */}

      <DemoCallBack></DemoCallBack>
      <Callbackwithout></Callbackwithout>

      <MyLogin></MyLogin>

      {/* <LifeCycle></LifeCycle> */}
    </div>

  );
}

export default App;
