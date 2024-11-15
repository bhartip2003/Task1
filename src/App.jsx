import { Provider } from "react-redux";
import { store } from "./redux/store";
import TopGainers from "./components/LandingPage/TopGainers";
import TopLosers from "./components/LandingPage/TopLosers";

impport

function App() {


  return (
    <Provider store={store}>
      <TopGainers />
      <TopLosers />
    </Provider>
  )
}

export default App
