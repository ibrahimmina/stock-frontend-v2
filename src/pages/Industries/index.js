import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
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
      width: 400,
      height: 120,
      minorTicks: 0.5,
      min: -1,
      max: 1,
      legend: "none",
    };
    const results = [];

    industries.forEach((industry, i) => {
      if (industry["_id"] != null) {
        let data = [
          ["Industry", "Average Rating"],
          ["", industry["avgRating"]],
        ];

        results.push(
          <div class="col-3" key={i}>
            <div class="card text-bg-dark">
              <Chart
                chartType="Gauge"
                width="100%"
                height="100%"
                data={data}
                options={options}
              />
              <div class="card-body">
                <p class="card-text">
                  <Link
                    to={
                      "/industrycountry/" +
                      `${this.props.match.params.country}` +
                      "/" +
                      `${industry["_id"]}`
                    }
                  >
                    {industry["_id"]}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <div class="container text-center text-bg-dark">
        <div class="row">{results}</div>
      </div>
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
