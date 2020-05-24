import React from 'react';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';

class Thumbnails extends React.Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`, { params: { _limit: 10 } }).then(res => {
      const projects = res.data;
      this.setState({ projects });
    })
  }
  render() {
    return (
      <div className="thumbnails">

        {this.state.projects.map(project => <ScrollAnimation animateIn="fadeInUp" key={project.id}><a href={project.url}><img loading="lazy" src={project.url} width="340" height="340" alt={project.title} /> <h2 className="thumbnails-title">{project.title}</h2></a></ScrollAnimation>)}

      </div>
    )
  }
}

export default Thumbnails;