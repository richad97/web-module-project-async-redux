import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getData } from "./actions/mainAction";

import "./App.css";

function App(props) {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="App">
      {props.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <section id="rank-section">
            <span>Top 10 Countries</span>
            {/* <span>
              <span>{"<"}</span>
              <span>Recovered</span>
              <span>{">"}</span>
            </span> */}
            <ol>
              {props.topTen.map((e, i) => {
                return <li key={i}>{e.name}</li>;
              })}
            </ol>
          </section>
          <section id="main-section">
            <div id="descriptor-wrapper">
              <span>
                <span>number</span>
                <span>descriptor</span>
              </span>
              <span>
                <span>number</span>
                <span>descriptor</span>
              </span>
              <span>
                <span>number</span>
                <span>descriptor</span>
              </span>
              <span>
                <span>number</span>
                <span>descriptor</span>
              </span>
              <span>
                <span>number</span>
                <span>descriptor</span>
              </span>
            </div>
            {/* <div id="title-wrapper">
              <span>Country</span>
              <input />
            </div> */}
          </section>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
    summary: state.summary,
    topTen: state.topTen,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(App);
