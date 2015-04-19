/** @jsx React.DOM */

var App = React.createClass({
  render: function() {
    return (
      <div className="class">
        <ButtonComponent txt="this is the button" />
        <InputComponent txt="this is the input" />
      </div>
    );
  }
});

var ReactMixin = {
  componentWillMount: function() {
    console.log("will mount")
  },
  getInitialState: function () {
    return {count: 0}
  },
  incrementCount: function () {
    this.setState({count:this.state.count+1})
  }
}

var ButtonComponent = React.createClass({
  mixins: [ReactMixin],
  render: function() {
    return (
      <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
    );
  }
});

var InputComponent = React.createClass({
  mixins: [ReactMixin],
  render: function() {
    return (
      <input value={this.props.txt} />
    );
  }
});

React.render(<App />, document.getElementById('content'))