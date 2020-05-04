/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl("doc1.html")}>Example Link</Button>
            <Button href={docUrl("doc2.html")}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          className="myCustomClass"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = props => {
      const { siteConfig, language = "" } = props;
      const { baseUrl, docsUrl } = siteConfig;
      const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
      const langPart = `${language ? `${language}/` : ""}`;
      const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
      return (
        <Block layout="fourColumn" {...props}>
          {[
            {
              content:
                "Salesforce lightweight frameworks is used for building single-page applications with dynamic, responsive user interfaces for Lightning Platform apps.",
              image: `${baseUrl}img/lwc_logo.png`,
              imageAlign: "top",
              title: `[Lightning Web Component](${docUrl(
                "lwc/LWC-introduction"
              )})`,
              imageLink: `${docUrl("lwc/LWC-introduction")}`
            },
            {
              content:
                "Salesforce Lightning Web Component leverages custom elements, templates, shadow DOM, decorators, modules, and other new language constructs available in ECMAScript 7 and beyond.",
              image: `${baseUrl}img/einstein_logo.jpg`,
              imageAlign: "top",
              title: `[LWC Video series](${docUrl(
                "lwc_videos/lwc-introduction"
              )})`,
              imageLink: `${docUrl("lwc_videos/lwc-introduction")}`
            },
            {
              content:
                "Salesforce Integrate with the apps you use every day. From productivity to marketing to collaboration and beyond, we can connect Salesforce to the other tools easily",
              image: `${baseUrl}img/integration_logo.png`,
              imageAlign: "top",
              title: `[Salesforce Integration Videos](${docUrl(
                "integration/salesforce-integration-introduction"
              )})`,
              imageLink: `${docUrl(
                "integration/salesforce-integration-introduction"
              )}`
            },
            // {
            //   content:
            //     "Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on Salesforce servers. ",
            //   image: `${baseUrl}img/apex_logo.png`,
            //   imageAlign: "top",
            //   title: `[Apex programming](${docUrl("apex/apex-Introduction")})`,
            //   imageLink: `${docUrl("apex/apex-Introduction")}`
            // },
            // {
            //   content:
            //     "Einstein Analytics allows you to explore all of your data quickly and easily by providing AI-powered advanced analytics, right in Salesforce.",
            //   image: `${baseUrl}img/einstein_logo.jpg`,
            //   imageAlign: "top",
            //   title: `[Einstein Analytics](${docUrl(
            //     "einstein/einstein-introduction"
            //   )})`,
            //   imageLink: `${docUrl("einstein/einstein-introduction")}`
            // }
          ]}
        </Block>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features siteConfig={siteConfig} language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
