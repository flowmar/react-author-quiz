import React, {Component} from 'react';
import getRefs from "./index.js";
import PropTypes from 'prop-types';
import onGameFormSubmitted from './index.js';

class AddGameForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    static defaultProps() {
        onGameFormSubmitted : getRefs(this)
    }
    handleSubmit() {
        this
            .props
            .onGameFormSubmitted(getRefs(this));
        return false
    }
    render() {
        return (
            <div className="row">
                <div className="col text-right mr-3">
                    <h1 className="display-4 font-weight-bold">{"     "}Add Game</h1>
                    <form role="form" onSubmit={this.handleSubmit} className="ml-2 text-right">
                        <div className="form-group">
                            <input
                                type="text"
                                ref="imageUrl"
                                className="form-control"
                                placeholder="Image URL"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer1"
                                className="form-control"
                                placeholder="Answer 1"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer2"
                                className="form-control"
                                placeholder="Answer 2"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer3"
                                className="form-control"
                                placeholder="Answer 3"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer4"
                                className="form-control"
                                placeholder="Answer 4"/>
                        </div>
                        <button type="submit" className="btn btn-mdb-color">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

AddGameForm.PropTypes = {
    onGameFormSubmitted: PropTypes.func
}
export default AddGameForm;