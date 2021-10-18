import React, { useState } from "react";
import { CheckSquare, MoreHorizontal } from "react-feather";
import "../style/Cards.css";
function Cards(props) {
  const [show, setShow] = useState(false);
  const HandleDelete = (id) => {
    let Newcards = [...props.card];
    props.setCard(Newcards.filter((item) => item.id !== id));
  };

  const HandleDragStart = (e, id, title) => {
    e.dataTransfer.setData("title", title);
    e.dataTransfer.setData("id", id);
    // e.dataTransfer.setAttribute("id",id)
    console.log(e.dataTransfer)

  };
  const HandleDragOver = (e) => {
    e.preventDefault();
    let id = parseFloat(e.dataTransfer.getData("id"))
    // let id = parseFloat(e.dataTransfer.getAttribute("id"))

    console.log(id);
    HandleDelete(id);
  };
  return (
    <div
      className="todo_card"
      draggable
      onDragOver={(e) => HandleDragOver(e)}
      onDragStart={(e) => HandleDragStart(e, props.item.id, props.item.title)}
      onClick={(e) => {
        setShow(false);
        e.stopPropagation();
      }}
    >
      <div className="moreCard">
        <MoreHorizontal
          onClick={(e) => {
            setShow(true);
            e.stopPropagation();
          }}
        />
        <div
          className={show ? "deleteBox" : "deleteBoxHide"}
          onClick={(e) => {
            e.stopPropagation();
            HandleDelete(props.item.id);
            setShow(false);
          }}
        >
          Delete
        </div>
      </div>
      <div className="card_title">
        <h2> {props.item.title}</h2>
      </div>
      <div className="card_body">
        <input type="date" defaultValue="2021-01-08" className="Date"></input>
        <p className="tasks">
          <CheckSquare /> 1/2
        </p>
      </div>
    </div>
  );
}

export default Cards;
