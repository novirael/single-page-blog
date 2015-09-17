/** @jsx React.DOM **/

var Layout = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation />
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
});
