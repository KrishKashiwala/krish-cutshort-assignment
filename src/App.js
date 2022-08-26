import React, { useEffect } from 'react'
import './assests/css/App.css';
import Personaldetails from './components/ui-components/Personaldetails';
import eden_company_logo from "./assests/images/eden_company_logo.png";
import Workspace from './components/ui-components/Workspace';
import Sharing from './components/ui-components/Sharing';
import Confirm from './components/ui-components/Confirm';
import Progress from './components/ui-components/Progress';
import { useSelector } from 'react-redux';

function App() {
  // @ts-ignore
  const baseState = useSelector(state => state.formState)

  // page display
  const PageDisplay = (steeper) => {
    switch (steeper) {
      case 1: return (<Personaldetails />)
      case 2: return (<Workspace />)
      case 3: return (<Sharing />)
      case 4: return (<Confirm />)
      default: return (<>{JSON.stringify(baseState, null, 2)}</>)
    }
  }

  useEffect(() => {
    PageDisplay(baseState.step)
  }, [baseState.step])

  return (
    <div className="eden_container">
      <img src={eden_company_logo} alt="" />
      <Progress />
      <div>{PageDisplay(baseState.step)}</div>
    </div>
  );
}

export default App;
