import React from 'react'

export default class SearchResults extends React.Component {
    constructor(props) {
        super()
        this.state = {
            mediaType: "movie",
            searchTerm: "",
            data: [],
            list: [],
            resultNames: []
        }
console.log("SearchResults Props")
console.log(props)
    }

    async componentDidUpdate(prevProps) {
        if (this.props.searchTerm !== prevProps.searchTerm) {

            this.setState({resultNames: []})

            const url = "/search?term=" + this.props.searchTerm + "&entity=" + this.props.mediaType
            const response = await fetch(url)

            this.state.data = await response.json()
            this.setState({list: this.state.data.results})
console.log(this.state.list)

            for (const name of this.state.list) {
                this.setState({resultNames: this.state.resultNames.concat(name.trackName)})
                console.log(name.trackName)
            }
            this.state.resultNames.sort()
        }
console.log("SEARCHrESULTS PROPS:")
console.log(this.props)

    }

    async componentDidMount() {
        const url = "/search?term=" + this.props.searchTerm + "&entity=" + this.props.mediaType
        const response = await fetch(url)

        this.state.data = await response.json()
        this.setState({list: this.state.data.results})

        for (const name of this.state.list) {
            this.setState({resultNames: this.state.resultNames.concat(name.trackName)})
            console.log(name.trackName)
        }
        this.state.resultNames.sort()
        console.log(this.state.resultNames)
    }
    
    render() {
        console.log(this.props)
        const resultsList = this.state.resultNames.sort().map(
            (item) =>
            <li key={item}>{item}</li>
        )
        return (
            <div>List of 
                <ul>
                    {resultsList}
                </ul>
            </div>
        )
    }

}
