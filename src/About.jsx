import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="row d-flex">
                    <div className="col ml-2">
                        <p className="lead">
                            Person 1
                        </p>
                    </div>
                    <div className="col">
                        <p className="lead">
                            Person 2
                        </p>
                    </div>
                    <div className="col">
                        <p className="lead">
                            Person 3
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;