import AddTodo from "./Components/AddTodo/AddTodo";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Todos from "./Components/Todos/Todos";
import "./styles/styles.scss";


function App() {

 
  return (
    <main className="themeContainer">
     
      <div className="wrapper">
        <Navbar />
        <AddTodo />
        <Todos />
        <Footer />
        <div className="parrafo">
          <p>Drag and drop to reorder list</p>
        </div>
      </div>
    </main>
  );
}

export default App;
