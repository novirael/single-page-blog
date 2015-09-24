/** @jsx React.DOM **/

var Navigation = React.createClass({

    title: "Single Page Blog",

    items: [
        { name: 'Home', key: 'home' },
        { name: 'Blog', key: 'blog' },
        { name: 'About', key: 'about' },
        { name: 'Contact', key: 'contact' }
    ],

    renderItems: function () {
        return this.items.map(function (item) {
            return (
                <li key={item.key}>
                    <a id={item.key}>{item.name}</a>
                </li>
            );
        });
    },

    render: function () {
        return (
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">
                            {this.title}
                        </a>
                    </div>
                    <div className="collapse navbar-collapse"
                         id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});