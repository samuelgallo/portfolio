import React from 'react';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';

class Thumbnails extends React.Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`https://samuelgallo.com/api/`).then(res => {
      const projects = res.data;
      this.setState({ projects });
    })
  }
  render() {
    console.log(this.state.projects);
    return (
      <div className="thumbnails">

        {this.state.projects.map(project => <ScrollAnimation animateIn="fadeInUp" key={project.id}><a href={window.location.origin + '/' + project.hash}><img loading="lazy" src={window.location.origin + '/images/' + project.thumb} width="340" height="340" alt={project.title} /> <h2 className="thumbnails-title">{project.title}</h2></a></ScrollAnimation>)}

      </div>
    )
  }
}

export default Thumbnails;