import Navigation from "./components/Navigation";
import Product from "./components/Product";
import Attribution from "./components/Attribution";
import { GlobalStyle } from "./styles/global.styled";

function App() {
	return (
		<>
			<GlobalStyle />
			<Navigation />
			<Product />
			<Attribution />
		</>
	);
}

export default App;
