/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
// const Disqus = require("disqus-react");
class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    // const disqusConfig = {
    //   url: window.location.origin,
    //   identifier: window.location.pathname,
    //   title: window.location.pathname.split("/").reverse()[0]
    // };
    // const disqusShortname = "salesforce-troop"; //found in your Disqus.com dashboard
    // const disqusConfig = {
    //   url: "http://localhost:3001", //this.props.pageUrl
    //   identifier: "salesforcetroop", //this.props.uniqueId
    //   title: "salesforcetroop" //this.props.title
    // };
    return (
      <>
        {/* <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        /> */}
        <footer className="nav-footer" id="footer">
          <section className="icon-flex">
            <a
              href="https://www.linkedin.com/in/nikhil-karkra-73a15319/"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <img
                src={`${this.props.config.baseUrl}img/linkedin.svg`}
                alt="Linkedin URL"
                width="64"
                height="64"
              />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/nikhil-karkra-73a15319/"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <img
                src={`${this.props.config.baseUrl}img/twitter.svg`}
                alt="Linkedin URL"
                width="64"
                height="64"
              />
            </a>
            <a
              href="https://github.com/karkranikhil/salesforcetroop"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <img
                src={`${this.props.config.baseUrl}img/github_icon.png`}
                alt="github URL"
                width="64"
                height="64"
              />
            </a>
            <a
              href="https://www.facebook.com/Salesforce-Troop-104653287818364"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <img
                src={`${this.props.config.baseUrl}img/facebook.svg`}
                alt="facebook URL"
                width="64"
                height="64"
              />
            </a>
            <div>
              <a
                className="github-button"
                href={this.props.config.repoUrl}
                data-icon="octicon-star"
                data-count-href="/facebook/docusaurus/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub"
              >
                Star
              </a>
              {this.props.config.twitterUsername && (
                <div className="social">
                  <a
                    href={`https://twitter.com/${this.props.config.twitterUsername}`}
                    className="twitter-follow-button"
                  >
                    Follow @{this.props.config.twitterUsername}
                  </a>
                </div>
              )}
              {this.props.config.facebookAppId && (
                <div className="social">
                  <div
                    className="fb-like"
                    data-href={this.props.config.url}
                    data-colorscheme="dark"
                    data-layout="standard"
                    data-share="true"
                    data-width="225"
                    data-show-faces="false"
                  />
                </div>
              )}
            </div>
          </section>
          <section className="copyright">{this.props.config.copyright}</section>
        </footer>
      </>
    );
  }
}

module.exports = Footer;
