// TODO: Implement this approach https://medium.com/@RubenOostinga/avoiding-deeply-nested-component-trees-973edb632991


import React, { Component } from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

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
    console.log(state);
    return {
        projects : state.firestore.ordered.projects
    }
};


// Use compose to attach multiple higher order components to the component;
// use fireStoreConnect HOC to sync this component with a firestore collection

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
    ) (Dashboard);