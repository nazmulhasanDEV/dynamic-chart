import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { size } from "lodash";
import Plot from "react-plotly.js";

// css file
import "../../../assets/styles/dashboard.css";

const ChartDashboard = () => {
  const [plots, setPlots] = useState([]);
  const allowedCharts = [
    { id: 1, chartName: "Bar chart" },
    { id: 2, chartName: "Pie chart" },
    { id: 3, chartName: "Line chart" },
  ];

  const config = {
    displayModeBar: false,
    responsive: true,
  };
  const addPlot = () => {
    // const newPlot = {
    //   x: ["2018-01-01", "2018-08-31", "2018-10-31"],
    //   y: [10, 5200, 30],
    //   //   type: "scatter",
    //   line: { color: "red", width: 3, shape: "spline" },
    //   mode: "lines+markers",
    //   name: `Plot ${plots.length + 1}`,
    // };

    // const newPlot = {
    //   values: [30, 25, 20, 15, 10],
    //   labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    //   type: "pie",
    //   textinfo: "label+percent",
    //   insidetextorientation: "radial",
    // };

    const newPlot = {
      x: [1, 2, 3, 4, 5],
      y: [10, 20, 15, 25, 18],
      name: "Charat 1",
      type: "spline",
      mode: "lines+markers",
      marker: {
        color: "blue",
      },
      line: {
        shape: "spline",
        color: "blue",
      },
    };

    setPlots([...plots, newPlot]);
  };

  const layout = {
    title: "Chart with Percentage Width",
    width: "100%", // Set the width as a percentage value
    // width: 320, // Set the width as a percentage value
    xaxis: {
      title: "X",
    },
    yaxis: {
      title: "Y",
    },
  };

  return (
    <>
      <Container>
        {/* header */}
        <Row>
          <Col>
            <div className="header-section mt-4">
              <h3 className="">Your charts</h3>
              <button
                type="button"
                className="btn add-new-chart-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                Add new chart
              </button>
            </div>
            <hr className="divider" />
          </Col>
        </Row>
        {/* header endsd */}

        {/* charts  */}
        <Row>
          {plots.map((plot, index) => (
            <Col md={6} lg={4} key={index}>
              <div
                className="embed-responsive embed-responsive-16by9"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  overflow: "hidden",
                  zoom: "60%",
                }}
              >
                <Plot
                  key={index}
                  data={[plot]}
                  layout={layout}
                  config={config}
                  className="embed-responsive-item"
                />
              </div>
            </Col>
          ))}
        </Row>
        {/* charts ends */}

        {/* modal starts */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add new chart
                </h1>
              </div>
              <div class="modal-body add-chart-modal-body">
                <form>
                  <div class="mb-3">
                    <label for="chart-name" class="col-form-label">
                      Chart name*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="Chart name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="chart-type" class="col-form-label">
                      Chart type*
                    </label>
                    <select class="form-control" id="message-text">
                      {size(allowedCharts) &&
                        allowedCharts?.map((item) => {
                          return (
                            <option value={item?.id}>{item?.chartName}</option>
                          );
                        })}
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-apply" onClick={addPlot}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal ends */}
      </Container>
    </>
  );
};

export default ChartDashboard;
