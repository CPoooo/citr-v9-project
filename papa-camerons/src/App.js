const Pizza = (props) => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.description),
        ]
    )
}

const App = () => {
    return React.createElement(
        'div',
        { style: { backgroundColor: "grey", borderRadius: 25 } },
        [
            React.createElement('h1', {}, "Papa Cameron\'s"),
            React.createElement(Pizza, { name: "Pepperoni", description: "Pepperoni, cheese, sauce, happiness" }),
            React.createElement(Pizza, { name: "Margherita", description: "Tomato, Basical, Mozzeralla" }),
        ]
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))


