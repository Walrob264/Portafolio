import "./style/Stack.css";

const Stack = () => {
  return (
    <section id="Stack" className="stack_section">
      <div className="stacks-containts">
        <div className="containt-javascript">
          <i className="bx bxl-javascript"></i>
          Javascript
        </div>
        <div className="containt-react">
          <i className="bx bxl-react"></i>React
        </div>
        <div className="containt-html">
          <i className="bx bxl-html5"></i>Html
        </div>
        <div className="containt-css">
          <i>
            <i className="bx bxl-css3"></i>
          </i>
          CSS
        </div>
        <h1 className="title">My stacks</h1>
        <div className="containt-git">
          <i>
            <i className="bx bxl-github"></i>
          </i>
          GitHub
        </div>
      </div>
    </section>
  );
};

export default Stack;
