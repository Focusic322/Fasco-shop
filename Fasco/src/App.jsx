import Ad from "./Components/Ad/Ad"
import Arrivals from "./Components/Arrivals/Arrivals"
import Customers from "./Components/Customers/Customers"
import Discounts from "./Components/Discounts/Discounts"
import Follow from "./Components/Follow/Follow"
import Header from "./Components/Header/Header"
import Shop from "./Components/Shop/Shop"
import Subcribe from "./Components/Subcribe/Subcribe"
import Footer from "./Components/Footer/Footer"




function App() {
  return (
    <div>
      <Header />
      <Shop />
      <Discounts duration={3 * 24 * 60 * 60 * 1000}/>
      <Arrivals />
      <Ad />
      <Follow />
      <Customers />
      <Subcribe />
      <Footer />
    </div>
  )
}

export default App
