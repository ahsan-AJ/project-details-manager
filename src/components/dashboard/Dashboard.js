// TODO: Implement this approach https://medium.com/@RubenOostinga/avoiding-deeply-nested-component-trees-973edb632991


import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

// Import {connect} from react-redux to connect this component to the redux store
import {connect} from 'react-redux';

class Dashboard extends Component {



    render() {

        const {projects} = this.props;
        // console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

// Create function mapStateToProps return an object which properties are attached to the props of this component
const mapStateToProps = (state) => {
    return {
        projects : state.project.projects
    }
};

export default connect(mapStateToProps)(Dashboard);