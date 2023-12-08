import categories from "./components/data/categories";
import Directory from "./components/Directory/Directory.component";

const App = () => {
	return <Directory categoryItems={categories} />;
};

export default App;
