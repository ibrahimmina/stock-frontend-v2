import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { createMapData } from "../../utils";
import { Loading } from "../../components/common";

import { Chart } from "react-google-charts";

import { GET_ALL_COUNTRIES_DATA } from "../../actions/stocksAction";

class Stocks extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.props.GET_ALL_COUNTRIES_DATA();
  }

  render() {
    const { countries } = this.props;

    let filterData = [];

    if (_.isEmpty(countries)) {
      return (
        <div className="background-container pt-5">
          <Loading />
        </div>
      );
    } else {
      filterData = createMapData(countries);
    }

    var selectHandler = function (e) {
      window.location = data.getValue(chart.getSelection()[0]["row"], 1);
    };

    return (
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = filterData[selection[0].row + 1];
              window.location = "country/" + region[0];
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={filterData}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    countries: state.stock.countries,
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GET_ALL_COUNTRIES_DATA: () => dispatch(GET_ALL_COUNTRIES_DATA()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
