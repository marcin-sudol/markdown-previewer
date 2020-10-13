




// ----- CLASS COMPONENT -----
class MainApp extends React.Component {
    constructor(props) {
        super(props);

        // ----- STATE FOR STATEFUL COMPONENT -----
        this.state = {
        };

        // ----- BINDING METHODS -----
        this.handleChange = this.handleChange.bind(this);
    }

    // ----- PROP TYPES -----
    static propTypes = {
        title: PropTypes.string.isRequired,
        value: PropTypes.number,
        tools: PropTypes.array
    }

    // ----- DEFAULT PROPS -----
    static defaultProps = {
        title: 'Title',
        value: 1,
        tools: ['react']
    }

    // ----- METHODS -----
    handleChange(event) {
    }

    // ----- RENDER -----
    render() {
        return (
            
        );
    }
};





// ----- RENDER COMPONENT -----
ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);

