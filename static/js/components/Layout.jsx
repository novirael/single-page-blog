/** @jsx React.DOM **/

var Layout = React.createClass({
    render: function () {
        return <h1>Hello World</h1>
    }
});

React.render(<Layout/>, document.getElementById("container"));