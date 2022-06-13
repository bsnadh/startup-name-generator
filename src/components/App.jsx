import React from "react";
import "./App.css";
import Header from "./Header/Header";
import ResultsContainer from "./ResultsContainer/ResultsContainer";
import SearchBox from "./SearchBox/SearchBox";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headText: "Startup Name Generator",
    headerExpanded: true,
    suggestedNames: [],
  };
  handleFocusChange = (focus) => {
    this.setState({ headerExpanded: !focus });
    console.log(focus);
  };
  handleBlurring = (blur) => {
    this.setState({ headerExpanded: blur });
    console.log(blur);
  };
  handleInputChange = (text) => {
    console.log(text);
    this.setState({
      suggestedNames: text ? name(text) : [],
    });
  };
  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headText}
        ></Header>
        <SearchBox
          onFocusing={this.handleFocusChange}
          onBlurring={this.handleBlurring}
          onChanging={this.handleInputChange}
        ></SearchBox>
        <ResultsContainer
          suggestedNames={this.state.suggestedNames}
        ></ResultsContainer>
      </div>
    );
  }
}

export default App;
