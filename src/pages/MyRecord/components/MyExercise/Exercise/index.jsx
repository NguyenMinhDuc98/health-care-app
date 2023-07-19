import React from "react";
import { Row, Col } from "antd";

const Exercise = ({ title, kcal, time }) => {
  return (
    <div className="exercise">
      <Row>
        <Col span={12} className="exercise-title">
          {title}
        </Col>
        <Col span={12} className="exercise-time">
          {time}
        </Col>
        <Col span={12} className="exercise-kcal">
          {kcal}
        </Col>
      </Row>
      {/* <div className="exercise-kcal">{kcal}</div> */}
    </div>
  );
};

export default Exercise;
