import { Provider } from 'react-redux';
import store from './redux/store';
import Editior from './markdown/Editior';
import Previewer from './markdown/Previewer';


const App = ()=> {
  return (
    <Provider store={store}>
      <div className="m-5 row">
        <div className="col"></div>
        <div className="col-10">
          <Editior />
          <Previewer/>
        </div>
        <div className="col"></div>
      </div>
    </Provider>
  );
}
export default App;