import React from "react";

function OrderConfrom() {
  return (
    <div className="oder-confrem">
      <h3>Edit Delevery Details</h3>
      <div className="col-50">
        <div className="col">
          <form action="" className="form">
            <input
              className="input"
              type="text"
              name="deliver"
              id="deliver"
              placeholder="Deliver to door"
            />
            <input
              className="input"
              type="text"
              name="road"
              id="road"
              placeholder="107 Rd No 8"
            />
            <input
              className="input"
              type="text"
              name="Buniness Name"
              id="Buniness Name"
              placeholder="Buniness Name "
            />
            <input
              className="input"
              type="text"
              name="Flat, suite or florr"
              id="Flat, suite or florr"
              placeholder="Flat, suite or florr "
            />
            <input
              className="input"
              type="text"
              name="Add delivery instructor"
              id="Add delivery instructor"
              placeholder=" Add delivery instructor"
            />
            <button type="submit" className="btn btn-custom">
              {" "}
              Save & Continue
            </button>
          </form>
        </div>

        <div className="col">
          <div className="col-write">
            <p>
              From <strong>Tangail Food House</strong>
            </p>
            <p>Arriving in 20-30 min</p>
            <p>Rd no</p>
            <div className="right-inside">
              <div className="insideContent">
                <h1>hi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfrom;
