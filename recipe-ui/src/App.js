import "./App.css";
import Header from "./components/Header";
import DetailRecipe from "./components/DetailRecipe";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header/>
      <DetailRecipe/>
      <Ingredients/>
      <Instructions/>
      <Footer/>
    </div>
  );
}

export default App;
