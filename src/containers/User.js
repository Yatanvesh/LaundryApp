import React from 'react';
class User extends React.Component {


    render(){
        return (
            <div>
               hello Mr <strong>{this.props.userName}</strong>
            </div>
        );
    }
}

export default User;