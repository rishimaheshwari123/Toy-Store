import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="stats-dashie">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <h3>6</h3>
                Orders
                <br />
                <i class="bx bxs-plane-alt"></i>
              </div>
              <div class="col">
                <h3>6</h3>
                Delivered
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
              </div>
              <div class="col">
                <h3>6</h3>
                In Stock
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-seam-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"
                  />
                </svg>
              </div>
              <div class="col">
                <h3>6</h3>
                Out of Stock
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-ban"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* user list */}
        <div className="customers-head">
          <h2>Customers List</h2>
        </div>
        <div className="customers-list">
          <table>
            <thead>
              <td>Name</td>
              <td>Email ID</td>
              <td>Password</td>
            </thead>
          </table>
        </div>

        {/* query list */}
        <div className="query-head">
          <h2>Customers Query</h2>
        </div>
        <div className="customers-list">
          <table>
            <thead>
              <td>Name</td>
              <td>Email ID</td>
              <td>Comment</td>
            </thead>
          </table>
        </div>

        {/* product list */}
        <div className="query-head">
          <h2>Products List</h2>
        </div>
        <div className="products-list">
          <table>
            <thead>
              <td>Image</td>
              <td>Name</td>
              <td>Price</td>
              <td>Delete</td>
            </thead>
          </table>
        </div>

        <div className="query-head">
          <h2>Update Products</h2>
        </div>
        <br></br>
        <div className="insertform">
          <div className="form-inputs">
            <div className="input">
              <span>Name</span>
              <input type="text" name="name" />
            </div>
            <div className="input">
              <span>Price</span>
              <input type="text" name="price" />
            </div>
            <br></br>
            <button>submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;