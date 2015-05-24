/** @jsx React.DOM */

var App = React.createClass({
  getInitialState: function () {
    return {data:[]}
  },
  componentWillMount: function() {
    reqwest({
      url: 'http://filltext.com/?rows=10&val={randomNumber}',
      type: '',
      success: function (response) {
        this.setState({data:response})
      }.bind(this)
    })
  },
  update:function(){
          this.setState({
              red:this.refs.red.refs.range.getDOMNode().value
          })
        },
        render:function(){
                  var items = this.state.data.map(function (){
                    return <li>{item.val}</li>
                  })
                  return <ul>{items}</ul>
              
        }
});

React.render(<App />, document.body)