/** @jsx React.DOM **/

var Header = React.createClass({

    header: "Clean Blog",

    description: "A Clean Blog Theme by Start Bootstrap",

    bgImage: "/static/img/home-bg.jpg",

    render: function () {
        return (
            <header className="intro-header" style={{backgroundImage: 'url(' + this.bgImage + ')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>{this.header}</h1>
                                <hr className="small" />
                                <span className="subheading">
                                    {this.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});