import './App.css'
import CheckoutStepper from './component/CheckoutStepper'


const CheckoutSteps = [
  {
    name: "Customer Info",
    Component: () => <div>Provide Your Details</div>
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter Your shipping address</div>
  },
  {
    name: "Payment",
    Component: () => <div>Complete Payment For your Order</div>
  },
  {
    name: "Delivered",
    Component: () => <div>Your Order has been Delivered</div>
  },

];

function App() {
  
  return (
    <>
      <h2 style={{textAlign:'center', margin:'10px'}}>Checkout</h2>
      <CheckoutStepper stepsConfig={CheckoutSteps} />
      
    </>
  )
}

export default App
