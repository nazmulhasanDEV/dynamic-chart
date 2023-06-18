import { size } from "lodash";
import { allowedCharts } from "../helpers/allowedCharts";
import { useEffect, useState } from "react";

const EditChartModal = ({ id }) => {
  const [newLabelWithValue, setNewLabelWithValue] = useState({});
  console.log("newLabelWithValue: ", newLabelWithValue);
  const [labelAndValueList, setLabelAndValueList] = useState([
    { labelName: "label", value: 34 },
  ]);
  //   console.log(labelAndValueList);

  const labelNameAndValueChangeHanlder = (event) => {
    setNewLabelWithValue({
      ...newLabelWithValue,
      [event.target.name]: event.target.value,
    });
  };

  const addNewLableWithValueHandler = () => {
    setLabelAndValueList((prevData) => [...prevData, { ...newLabelWithValue }]);
    // setNewLabelWithValue({});
  };

  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
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
                  name="chartName"
                  //   value={newChartInfo?.chartName}
                  //   onChange={(e) =>
                  //     setNewChartInfo({
                  //       ...newChartInfo,
                  //       [e.target.name]: e.target.value,
                  //     })
                  //   }
                />
              </div>
              <div class="mb-3">
                <label for="chart-type" class="col-form-label">
                  Chart type*
                </label>
                <select
                  class="form-control"
                  id="message-text"
                  name="chartType"
                  //   onChange={(e) =>
                  //     setNewChartInfo({
                  //       ...newChartInfo,
                  //       [e.target.name]: e.target.value,
                  //     })
                  //   }
                >
                  {size(allowedCharts) &&
                    allowedCharts?.map((item) => {
                      return (
                        <option value={item?.id} selected={item?.id === 1}>
                          {item?.chartName}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div class="mb-3">
                <label for="chart-type" class="col-form-label">
                  Labels and values
                </label>
                {size(labelAndValueList) &&
                  labelAndValueList?.map((item) => {
                    return (
                      <>
                        <div class="row py-3">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control"
                              value={item?.labelName}
                              placeholder="Label name"
                              aria-label="First name"
                            />
                          </div>
                          <div class="col">
                            <input
                              type="text"
                              value={item?.value}
                              class="form-control"
                              placeholder="Label value"
                              aria-label="Last name"
                            />
                          </div>
                          <div class="col">
                            <input
                              type="button"
                              class="form-control btn btn-danger"
                              value="Remove"
                              placeholder="Last name"
                              aria-label="Last name"
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      name="labelName"
                      value={newLabelWithValue?.labelName}
                      placeholder="Label name"
                      aria-label="First name"
                      onChange={labelNameAndValueChangeHanlder}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      name="value"
                      value={newLabelWithValue?.value}
                      placeholder="Label value"
                      aria-label="Last name"
                      onChange={labelNameAndValueChangeHanlder}
                    />
                  </div>
                  <div class="col">
                    <input
                      type="button"
                      class="form-control btn-add"
                      value="Add"
                      onClick={addNewLableWithValueHandler}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              //   ref={ref}
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-apply"
              //   onClick={() => addNewChartHanlder(newChartInfo)}
              //   disabled={!newChartInfo?.chartName || !newChartInfo?.chartType}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditChartModal;
