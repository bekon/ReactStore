/** @jsx React.DOM */

var App = React.createClass({
  update: function () {
      var newVal = this.props.val+1
      this.setProps({val:newVal})
    },
    getInitialState: function () {
      return {increasing: false}
    },
    componentWillReceiveProps: function(nextProps) {
      this.setState({increasing: nextProps.val>this.props.val})
    },
    //returns true/false
    shouldComponentUpdate: function (nextProps, nextState) {
      return nextProps.val % 5 === 0;
    },
    componentWillUpdate: function (nextProps, nextState) {
      console.log("prevProps ===" JSON.stringify(nextProps))
    },
    render: function () {
      console.log(this.state.increasing)
      return ( 
        <div>
          <button onClick={this.update}>{this.props.val}</button>
      </div>
      );
    },
    componentDidUpdate: function (prevProps, prevState, rootNode) {
      console.log("prevprops ===" JSON.stringify(prevProps))
    }
});


React.render(<App val={0} />, document.getElementById('content'))