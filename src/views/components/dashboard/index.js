import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { size } from "lodash";
import Plot from "react-plotly.js";
import DashboardContext from "./context/DashboardContext";
import AddChartModal from "./modal/AddChart";

const ChartDashboard = () => {
  const [charts, setCharts] = useState([]);

  const config = {
    displayModeBar: false,
    responsive: true,
    ResizeObserver: true,
  };

  return (
    <DashboardContext.Provider
      value={{
        charts,
        setCharts,
      }}
    >
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
                data-bs-target="#add-new-chart-modal"
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
        <Row className="gy-3">
          {size(charts) ? (
            charts.map((plot, index) => (
              <Col md={12} lg={6} key={index}>
                <div className="chart-container embed-responsive embed-responsive-16by9 d-flex align-items-center justify-content-center">
                  <Plot
                    key={index}
                    data={[plot]}
                    layout={{
                      title: plot?.name,
                      autosize: true,
                    }}
                    config={config}
                    className="embed-responsive-item"
                  />
                </div>
              </Col>
            ))
          ) : (
            <h6 className="text-center">No chart found to show here</h6>
          )}
        </Row>
        {/* charts ends */}
        <AddChartModal id="add-new-chart-modal" />
      </Container>
    </DashboardContext.Provider>
  );
};

export default ChartDashboard;
