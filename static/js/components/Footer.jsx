/** @jsx React.DOM **/

var Footer = React.createClass({

    footerText: "Single Page Blog 2015",

    references: [
        { key: 'twitter', link: '#', iconCode: 'fa-twitter' },
        { key: 'facebook', link: '#', iconCode: 'fa-facebook' },
        { key: 'github', link: '#', iconCode: 'fa-github' }
    ],

    renderReferences: function () {
        return this.references.map(function (item) {
            return (
                <li key={item.key}>
                    <a href="#">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className={"fa fa-stack-1x fa-inverse " + item.iconCode}></i>
                        </span>
                    </a>
                </li>
            );
        });
    },

    render: function () {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <ul className="list-inline text-center">
                                {this.renderReferences()}
                            </ul>
                            <p className="copyright text-muted">
                                {this.footerText}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});