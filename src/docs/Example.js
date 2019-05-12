import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showcode : false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {showcode: !prevState.showcode}
    });
  }

  render(){
    const {showcode} = this.state;
    const {code, description, name} = this.props.example;
    const ExampleComponent = require(`./Examples/${this.props.componentName}/${name}`).default;
    return (
      <div className="doc-example">
        {description && <h4>{description}</h4>}
        <ExampleComponent />
        <p>
          <button  onClick={this.toggleCode}>
            {showcode ? "Hide" : "Show"} Code
          </button>
        </p>

        {showcode && <CodeExample>{code}</CodeExample>}
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName:PropTypes.string.isRequired
}

export default Example;
