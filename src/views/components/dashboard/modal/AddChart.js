import { useContext, useState, useRef } from "react";
import { size } from "lodash";
import { useSnackbar } from "notistack";
import DashboardContext from "../context/DashboardContext";

const AddChartModal = ({ id }) => {
  const { enqueueSnackbar } = useSnackbar();
  const ref = useRef();
  const allowedCharts = [
    { id: 1, chartName: "Bar chart" },
    { id: 2, chartName: "Pie chart" },
    { id: 3, chartName: "Line chart" },
  ];
  const { charts, setCharts } = useContext(DashboardContext);

  const [newChartInfo, setNewChartInfo] = useState({
    chartName: "",
    chartType: 1,
  });

  const addNewChartHanlder = (newChartInfo) => {
    let newChart;
    if (newChartInfo?.chartType === "1" || newChartInfo?.chartType === 1) {
      newChart = {
        y: [
          "Marc",
          "Henrietta",
          "Jean",
          "Claude",
          "Jeffrey",
          "Jonathan",
          "Jennifer",
          "Zacharias",
        ],
        x: [90, 40, 60, 80, 75, 92, 87, 73],
        type: "bar",
        orientation: "h",
        name: newChartInfo?.chartName,
      };
    }
    if (newChartInfo?.chartType === "2") {
      newChart = {
        values: [30, 25, 20, 15, 10],
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        type: "pie",
        textinfo: "label+percent",
        insidetextorientation: "radial",
        name: newChartInfo?.chartName,
      };
    }
    if (newChartInfo?.chartType === "3") {
      newChart = {
        x: ["2018-01-01", "2018-08-31", "2018-10-31"],
        y: [100, 200, 3000],
        //   type: "scatter",
        line: { color: "blue", width: 3, shape: "spline" },
        mode: "lines+markers",
        name: newChartInfo?.chartName,
      };
    }

    setCharts([...charts, newChart]);
    setNewChartInfo({
      chartName: "",
      chartType: 1,
    });
    ref.current?.click();
    enqueueSnackbar("New chart has been added successfully", {
      variant: "success",
    });
  };

  return (
    <>
      {/* modal starts */}
      <div
        class="modal fade"
        id={id}
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
                    name="chartName"
                    value={newChartInfo?.chartName}
                    onChange={(e) =>
                      setNewChartInfo({
                        ...newChartInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setNewChartInfo({
                        ...newChartInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
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
              </form>
            </div>
            <div class="modal-footer">
              <button
                ref={ref}
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-apply"
                onClick={() => addNewChartHanlder(newChartInfo)}
                disabled={!newChartInfo?.chartName || !newChartInfo?.chartType}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal ends */}
    </>
  );
};

export default AddChartModal;
