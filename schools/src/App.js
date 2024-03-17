import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import AppRouters from "./routers/AppRputers";
import store from "./redux/store";


const App = () => {
  return (
    <HashRouter>
    <Provider store={store}>
        <AppRouters />
      </Provider>
    </HashRouter>
  );
};

export default App;
