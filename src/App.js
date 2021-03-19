import './App.css';

const dishes = [
  "Macaroni and cheese",
  "Salmon",
  "Tofu with vegetables"
];

const dishObjects = dishes.map((dish, i) => ({id : i, title : dish}));

function Header(props) {
  return (
    <header>
      <h1>{props.name} kitchen</h1>
    </header>
  );
}

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food.</p>
      {/* Img var or like this string */}
      <img src="https://github.com/davele-itsme.png" alt="restaurant"/>
      <ul style={{textAlign : "left" }}>
        {props.dishes.map((dish) => (<li key={dish.id}>{dish.title}</li>))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <Header name="David"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
