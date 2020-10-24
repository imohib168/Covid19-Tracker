import React from 'react';
import Styles from './App.module.css';

import { Cards, Chart, CountryPicker, Navbar } from './Components'

import { fetchData } from './Components/Api'


// function App() {

// 	const [data, setData] = useState({})

// 	async function CallAPI() {
// 		const fetchedData = await fetchData();

// 		setData(fetchedData);
// 	}
// 	CallAPI()

// 	return (
// 		<div>
// 			<div>
// 				<Navbar />
// 			</div>
// 			<div className={Styles.container} >
// 				<Cards data={data} />
// 				<Chart />
// 				<CountryPicker />
// 			</div>
// 		</div>
// 	);
// }

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    console.log(fetchedData)
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className={Styles.container} >
          <Cards data={data} />
          <Chart />
          <CountryPicker />
        </div>
      </div>
    )
  }
}

export default App;
