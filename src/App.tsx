import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        color="info"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
