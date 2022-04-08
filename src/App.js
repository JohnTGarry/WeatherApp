import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="icon-container">
          <canvas id="icon" width="100" height="100"></canvas>
        </div>
      </div>
      <div className="content">
        <div className="general-information">
          <div className="status">Enter A Location</div>
          <div className="location">To Find The Weather</div>
        </div>
        <div className="detail-section">
          <div className="detail">
            <div className="title">Wind</div>
            <div className="value">TBD</div>
          </div>
          <div className="detail">
            <div className="title">Temperature</div>
            <div className="value">TBD</div>
          </div>
          <div className="detail">
            <div className="title">Precipitation</div>
            <div className="value">TBD</div>
          </div>
        </div>
        <div className="city-search-container">
          <input type="text" className="city-search" placeholder="Enter Location" />
        </div>
      </div>
    </div>
  );
};

export default App;
