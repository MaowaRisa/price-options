
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import PieChartWithCustomizedLabel from './components/PieChartWithCustomizedLabel/PieChartWithCustomizedLabel'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <PieChartWithCustomizedLabel></PieChartWithCustomizedLabel>
    </>
  )
}

export default App
