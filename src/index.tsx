import ReactDOM from 'react-dom';
// import EventComponent from './events/EventComponent';
// import UserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';

// const users = [
//   { name: 'Sarah', age: 20 },
//   { name: 'Alex', age: 20 },
//   { name: 'Michael', age: 20 },
// ];

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
