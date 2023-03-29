import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ fn }) => {
  const [data, setData] = useState({ itemName: "", itemDate: "" });
  const [err, setErr] = useState("");
  function hanbelSubmit(e) {
    e.preventDefault();
    console.log(data);
    if (data.itemName === "") {
      setErr("please fill this input field before submit");
    } else {
      const [year, month, date] = data.itemDate.split("-");
      const NumbersTomonths = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
      };
      fn({
        itemName: data.itemName,
        itemDate: date,
        itemMonth: NumbersTomonths[month],
        itemyear: year,
      });
    }
  }
  return (
    <div className="addContainer">
      <form className="form" onSubmit={hanbelSubmit}>
        <div className="inputfields">
          <div className="fields">
            <label>Item Name</label>
            <input
              type="text"
              id="itemName"
              placeholder="Item name.."
              value={data.itemName}
              onChange={(e) => setData({ ...data, itemName: e.target.value })}
            />
            <span>{err}</span>
          </div>

          <div className="fields">
            <label>Item MFD</label>
            <input
              type="date"
              id="itemDate"
              placeholder="Item date"
              value={data.itemDate}
              onChange={(e) => setData({ ...data, itemDate: e.target.value })}
            />
            {err.length > 0 ? <span>{err}</span> : null}
          </div>
        </div>
        <div>
          <input type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
