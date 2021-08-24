const hello = function({name}) {
  return React.createElement('div', null, `hello -- ${name}`);
}

class world extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.createElement('div', null, `class -- ${this.props.name}`);
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  handleAdd() {
    this.setState({
      value: this.state.value + 1
    })
  }

  handleMinus() {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    let p;
    return React.createElement(
      'div',
      null,
      React.createElement('p', {style: {color: 'red', border: '1px solid red'}, ref: node => p = node }, `计数器${this.state.value}`),
      React.createElement('button', {'onclick': this.handleAdd.bind(this)}, 'add'),
      React.createElement('button', {'onclick': this.handleMinus.bind(this)}, 'minus')
    )
  }
}

const helloWorld = React.createElement('div', null, [
  React.createElement('div', null, 'array 1'),
  React.createElement('div', null, 'array 2'),
]);

const myCounter = React.createElement('div', null, Counter)

ReactDOM.render(myCounter, document.getElementById('app'));