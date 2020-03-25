import React from 'react';
import './App.css';
import Home from './pages/home';
import Project from './pages/project';
import Navigation from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from './Contentful';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
    this.getData = this.getData.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  getData = async() => {
    try{
      let response = await Client.getEntries({
        content_type: "myPortfolioProjects",
        order: "sys.createdAt"
      });
      let projects = this.formatData(response.items);
      this.setState({
        projects
      })
    } catch(error) {
      console.log(error)
    } 
  }

  componentDidMount(){
    this.getData()
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.img.map(image => image.fields.file.url);
      let project = { ...item.fields, images, id };
      return project;
    });
    return tempItems;
  }

  render() {
    const { projects } = this.state;

    return (
      <Router>
        <main>
        <Navigation />
        <Switch>
          <Route exact path="/" render={()=><Home projects={projects}/>}/>
          {projects.map((project, index)=> 
            <Route 
              key={index}
              exact path={`/project/${index}`} 
              render={
                () => <Project project={project} />
              }
            />
          )}
        </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
