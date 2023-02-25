import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { createIndustryData } from "../../utils";

import { Loading } from "../../components/common";

import { Chart } from "react-google-charts";

import { GET_ALL_INDUSTRIES_DATA } from "../../actions/stocksAction";

class Industries extends Component {
  state = {
    industries: [],
  };

  componentDidMount() {
    this.props.GET_ALL_INDUSTRIES_DATA(this.props.match.params.country);
  }

  render() {
    const { industries } = this.props;

    console.log(industries);

    let filterData = [];
    let options = [];

    if (_.isEmpty(industries)) {
      return (
        <div className="background-container pt-5">
          <Loading />
        </div>
      );
    } else {
      filterData = createIndustryData(industries);
    }
    console.log(filterData);

    options = {
      title: "Country Industry Analysis",
      hAxis: { title: "Number of Analyzed Stock" },
      vAxis: { title: "Average Rating" },
      bubble: { textStyle: { fontSize: 11 } },
    };

    return (
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={filterData}
        options={options}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    industries: state.industry.industries,
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GET_ALL_INDUSTRIES_DATA: (country) =>
      dispatch(GET_ALL_INDUSTRIES_DATA(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Industries);
