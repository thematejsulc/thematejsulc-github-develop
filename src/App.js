import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import Test from "./components/Test/Test";

function App() {
	return (
		<div className="App">
			<Navbar />
			<ProjectPreview />
			Hello, World!
			<Test />
		</div>
	);
}

export default App;
