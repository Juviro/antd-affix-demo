import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Affix } from "antd";
import "antd/dist/antd.css";

const AffixComp = () => (
  <Affix>
    <div style={{ backgroundColor: "yellow" }}>
      <span>Hello World</span>
    </div>
  </Affix>
);

const ColorComp = ({ setVisible }) => (
  <div>
    <div style={{ height: 500, backgroundColor: "red", width: "100%" }} />
    <AffixComp />
    <div style={{ height: 500, backgroundColor: "blue", width: "100%" }} />
    <div
      onClick={() => setVisible(false)}
      style={{ height: 500, backgroundColor: "green", width: "100%" }}
    />
  </div>
);

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      {visible ? (
        <ColorComp setVisible={setVisible} />
      ) : (
        <div
          style={{ width: 200, height: 200, backgroundColor: "orange" }}
          onClick={() => setVisible(true)}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
