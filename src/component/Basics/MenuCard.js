import React from "react";
import "./style.css";
const myStyle = { color: "green", fontSize: 30 };


const MenuCard = ({ menuData }) => {
  // console.log(menuData);

  return (
    <>
      <section className="main-card--container">
      {menuData.map((curElem) => {  
        const {id,image,name,category,price,description} = curElem;
        return (
          <>
            <div className="card-container" key={curElem.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle" style={{ color: "red" }}>
                    {name}
                  </span>
                  {/*inline css eg*/}
                  {/* <span className="card-author subtle" style={myStyle}>
                    {curElem.name}
                  </span> */}
                  {/*internal css eg*/}
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">
                    {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="Kachori_Image" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
      </section>

    </>
  );
};

export default MenuCard;
