import ReactDOM from "react-dom/client"

// React Element

const head = <h1 className="head1" tabIndex="1">HELLO</h1>;

//React Component
const TitleComponent = () => (
    <h2 className="titleCls">Hello title from ANOTHER FUNCTIONAL component</h2>
)

//React Element
const title = (
    <h1 className="titleEle">Hello React Element JSX</h1>
);

// React function based component
const HeadingComponent = () => {
    return (
        <div id="parent">
            <TitleComponent />
            {TitleComponent()}
            {title}
            <h1 className="head1" tabIndex="1">Hello functional component h1</h1>
        </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);