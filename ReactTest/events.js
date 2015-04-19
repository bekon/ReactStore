/** @jsx React.DOM */

var App = React.createClass({
	update: function () {
  		var newVal = this.props.val+1
  		this.setProps({val:newVal})
  	},
    //runs before component will be rendered
    componentWillMount:function () {

    },
    //rendered
    componentDidMount: function () {

    },
    //unmounted
    componentWillUnmount: function () {

    },
    unmount: function () {
      React.unmountComponentAtNode(document.getElementById('content'))
    },
  render: function () {

    return ( 
    	<div id='oops'>
	      <button onClick={this.unmount}>{this.props.val}</button>
		</div>
    );
  }
});


React.render(<App val={0} />, document.getElementById('content'))