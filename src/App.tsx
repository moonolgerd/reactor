import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const people: IDataRow[] = [
    { name: "John", age: 20 },
    { name: "Susan", age: 16 }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
          <thead>
            <th>Name</th>
            <th>Age</th>
          </thead>
          <DataRow people={people} />
        </table>
        <input type="button" value="hello" />
        <Welcome name="John" />
        <Welcome name="Susan" />
        <MyComponent title="Hello" paragraph="world" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today
        </a>
      </header>
    </div>
  );
}

function Welcome(props: any) {
  return <span>Hello, {props.name}</span>;
}

function DataRow(props: any) {

  const people: IDataRow[] = props.people;
  const cells = people.map(prop => <tr><td>{prop.name}</td><td>{prop.age}</td></tr>);
  return (<tbody>{cells}</tbody>);
}

class MyComponent extends React.Component<MyProps, State> {
  constructor(props: MyProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isToggleOn: true };
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return <span>
      <h1>{this.props.title}</h1>
      <p>{this.props.paragraph}</p>
      <button onClick={this.handleClick}>
        Button is {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    </span>;
  }
}

type MyProps = {
  title: string;
  paragraph?: string
}
type State = {
  isToggleOn: boolean
}

interface IDataRow {
  //Name
  name: string;
  age: number;
}

export default App;
