import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  useEffect(() => {
    console.log('window.ReactNativeWebView');
    console.log(window);
    window.addEventListener("message", (event) => {
      // alert("This is a Entry Point Working in iOS");
      // console.log(event);
      setTxt(JSON.stringify(event.data))
      // init(event.data)
   });
  }, []);
  const [txt, setTxt] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{width: 100, height: 100}}
          onClick={() => {
            setTxt(JSON.stringify(window.ReactNativeWebView));
          }}
        />
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => {
            window.ReactNativeWebView.postMessage('test');
          }}
        />
        <button
          style={{width: 100, height: 100}}
          onClick={() => {
            // document.ReactNativeWebView.postMessage('Post message from web');
            window.ReactNativeWebView.postMessage('Post message from web');
          }}
        />
        <p>{txt}</p>
        <input type="file" />
      </header>
    </div>
  );
}

export default App;
