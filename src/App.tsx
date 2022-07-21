import Navigation from "./components/Navigation";
import Product from "./components/Product";
import Attribution from "./components/Attribution";
import { StateProvider } from "./CartContext";
import { GlobalStyle } from "./styles/global.styled";

function App() {
	return (
		<StateProvider>
			<GlobalStyle />
			<Navigation />
			<Product />
			<Attribution />
		</StateProvider>
	);
}

export default App;
