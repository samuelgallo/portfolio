import React from 'react';
import axios from 'axios';
import Header from '../partials/Header'

class Portfolio extends React.Component {
  state = {
    project: ''
  }

  componentDidMount() {
    const { handle } = this.props.match.params;
    axios.get(`https://samuelgallo.com/api/`, { params: { hash: handle } }).then(res => {
      const project = res.data[0];
      this.setState({ project });
    })
  }
  render() {
    return (
      <div className="main">
        <Header />

        <div className="portfolio">
          <div className="description">
            <h1 className="portfolio-title">{this.state.project.title}</h1>
            <p className="portfolio-descriptions">{this.state.project.description}</p>
            <span className="portfolio-platform">Platform: {this.state.project.platform}</span>
            <span className="portfolio-technologies">Technologies: {this.state.project.technologies}</span>
            {/* <a href={this.state.project.url} taget="_blank" rel="noopener noreferrer" title={this.state.project.title}>{this.state.project.url}</a> */}
          </div>
          <div className="print">

            <img src={window.location.origin + '/images/' + this.state.project.image} alt={this.state.project.title} loading="lazy" width="1200" />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;