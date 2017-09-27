import React, {Component} from "react";
// eslint-disable-next-line
import createReactClass from "create-react-class";
import PropTypes from "prop-types";

class Book extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick(e) {
        this
            .props
            .onBookSelected(this.props.title);
    }
    static defaultProps = {
        foregroundColor: "crimson",
        backgroundColor: "rgba(14,40,65,.04)",
        size: "2rem",
        shadow: ".06rem .04rem .04rem white"
    };
    static propTypes = {
        foregroundColor: PropTypes.string
    };
    render() {
        var styles = {
            textShadow: this.props.shadow,
            fontSize: this.props.size,
            color: this.props.foregroundColor,
            backgroundColor: this.props.backgroundColor
        };
        return (
            <div
                style={styles}
                className="z-depth-2 choices bg-indigo m-1 p-3"
                onClick={this.handleClick}>
                <h3>
                    {this.props.title}
                </h3>
            </div>
        );
    }
}

export default Book;
