import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { createIndustryData } from "../../utils";

import { Loading } from "../../components/common";

import { Chart } from "react-google-charts";

import { GET_STOCKS_COUNTRY_INDUSTRY_DATA } from "../../actions/stocksAction";

class IndustryCountry extends Component {
  state = {
    industriesCountries: [],
  };

  componentDidMount() {
    console.log("country = " + this.props.match.params.country);
    console.log("industry = " + this.props.match.params.industry);
    this.props.GET_STOCKS_COUNTRY_INDUSTRY_DATA(
      this.props.match.params.country,
      this.props.match.params.industry
    );
  }

  render() {
    const { industriesCountries } = this.props;

    console.log(industriesCountries);

    let result = [];
    industriesCountries.forEach((stock, i) => {
      result.push(
        <tr>
          <th scope="row" key={i}>
            {stock.index}
          </th>
          <td>{stock.BUY_DECISION}</td>
          <td>{stock.EXIT_DECISION}</td>
          <td>{stock.Rating1}</td>
          <td>{stock.Rating2}</td>
          <td>{stock.Trend_Started}</td>
          <td>{stock.Stop_Loss}</td>
          <td>{stock.Close}</td>
          <td>{stock.Volume}</td>
        </tr>
      );
    });
    console.log(result);

    if (_.isEmpty(industriesCountries)) {
      return (
        <div className="background-container pt-5">
          <Loading />
        </div>
      );
    }

    return (
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">BUY_DECISION</th>
            <th scope="col">EXIT_DECISION</th>
            <th scope="col">Rating1</th>
            <th scope="col">Rating2</th>
            <th scope="col">Trend_Started</th>
            <th scope="col">Stop_Loss</th>
            <th scope="col">Close</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    industriesCountries: state.industriesCountry.industriesCountries,
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GET_STOCKS_COUNTRY_INDUSTRY_DATA: (country, industry) =>
      dispatch(GET_STOCKS_COUNTRY_INDUSTRY_DATA(country, industry)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndustryCountry);
