import React, { useState } from "react";
import To from "./todo";
const TODO = () => {
  const [List, setList] = useState();
  const [Items, setItems] = useState([]);

  const show = (e) => {
    setList(e.target.value);
  };

  const addList = (e) => {
    if (List === "") {
      return alert(`please input a data`);
    } else {
      setItems(() => {
        return [...Items, List];
      });
      setList("");
    }
  };
  const removeList = (id) => {
    setItems((pre) => {
      return pre.filter((curr, index) => {
          console.log(id)
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="todo">
          <br />
          <h1 className="heading">Welcome To my ToDo list</h1>
          <br />
          <input
            type="text"
            name="item"
            onChange={show}
            value={List}
            placeholder="Add Your List"
            className="srh"
            autoComplete="off"
          />
          <button className="btn" onClick={addList}>
            +
          </button>
          <ol>
            {Items.map((curr, index) => {
              return (
                <To key={index} current={curr} delete={removeList} id={index} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TODO;
