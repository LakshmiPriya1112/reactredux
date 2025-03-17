import { Provider } from "react-redux";
import { store } from "./store/store";
import MovieList from "./components/MovieList";


function App() {
  return (
    <Provider store={store}>
      <MovieList />
    </Provider>
  );
}

export default App;
