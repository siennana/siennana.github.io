import '../../pages/Window.css';

function Window({content}) {
  return (
    <div className="panel">
      <div className="top_bar">
        <div className="descriptor">Description</div>
        <div className="buttons">
          <div id="minimize" className="min bar_click"></div>
          <div id="maximize" className="max bar_click"></div>
          <div id="close" className="exit bar_click"></div>
        </div>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default Window;