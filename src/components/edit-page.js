import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import EditForm from './edit-form';

export function EditPage(props) {
     // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <div className="home">
            <h2>Update Your Information</h2>
            <EditForm />
            <Link to="/dashboard">Cancel</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(EditPage);