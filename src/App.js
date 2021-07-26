import pic from "./picture.png";
import "./App.css";

// Components
import Header from "./components/header";
import Experiences from "./components/experiences";

function App() {
  return (
    <div className="App">
      <Header imgPath={pic} />
      <main className="App-content">
        <Experiences />
      </main>
    </div>
  );
}

export default App;
