/** @jsx React.DOM */

var App = React.createClass({

  render: function () {
    return ( 
    	<div>
      <BButton className="btn-primary"> <BHeart />React</BButton>
      <BButton className="btn-sucess"> <BHeart />React</BButton>
      <BButton className="btn-danger"> <BHeart />React</BButton>
		</div>
    );
  }
});

var BButton = React.createClass({

	render: function() {
		return (
			<a className="btn btn-primary">{this.props.children}</a>
		);
	}

});

var BHeart = React.createClass({

	render: function() {
		return (
			this.transferPropsTo(<span className="glyphicon glyphicon-heart" />)
		);
	}

});


React.render(<App />, document.body)