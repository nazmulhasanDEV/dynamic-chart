import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Plotly from "plotly.js-dist-min";

// css file
import "../../../assets/styles/dashboard.css";

const Charts = () => {
  useEffect(() => {
    Plotly.newPlot(
      "gd",
      /* JSON object */ {
        data: [{ y: [1, 2, 3] }],
        layout: { width: 600, height: 400 },
      }
    );
  }, []);
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
          <Col>
            <div id="gd"></div>
          </Col>
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
                      <option>Option 1</option>
                      <option>Option 1</option>
                      <option>Option 1</option>
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
                <button type="button" class="btn btn-apply">
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

export default Charts;
