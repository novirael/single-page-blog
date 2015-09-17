/** @jsx React.DOM **/

var articles = [
    {
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Author Name",
        date: "July 8, 2014",
        key: "1"
    },
    {
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subtitle: "",
        author: "Author Name",
        date: "September 18, 2014",
        key: "2"
    },
    {
        title: "Science has not yet mastered prophecy",
        subtitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Author Name",
        date: "August 24, 2014",
        key: "3"
    },
    {
        title: "Failure is not an option",
        subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Author Name",
        date: "July 8, 2014",
        key: "4"
    }
];

var Content = React.createClass({


    renderPosts: function () {
        return articles.map(function (article) {
            return (
                <div key={article.key}>
                    <div className="post-preview">
                        <a href="">
                            <h2 className="post-title">
                                {article.title}
                            </h2>
                            <h3 className="post-subtitle">
                                {article.subtitle}
                            </h3>
                        </a>
                        <p className="post-meta">
                            Posted by <a href="#">{article.author}</a> on {article.date}
                        </p>
                    </div>
                    <hr />
                </div>
            );
        });
    },


    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        {this.renderPosts()}
                        <ul className="pager">
                            <li className="next">
                                <a href="#">Older Posts &rarr;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});