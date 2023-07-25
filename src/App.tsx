import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Header/>
      <Products/>
      <Cart/>
    </ShoppingCartContextProvider>
  )
}

export default App
