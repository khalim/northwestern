import React from 'react'

export default class SearchResults extends React.Component {
    constructor(props) {
        super()
        this.state = {
            mediaType: "movie",
            searchTerm: "",
            resultNames: []
        }
console.log("SearchResults Props")
console.log(props)
        this.someCustomFn = this.someCustomFn.bind(this)
    }

    async someCustomFn() {

    }


    async componentDidUpdate(prevProps) {
        if (this.props.searchTerm !== prevProps.searchTerm) {
            // Reset resultNames to ensure there are no remnants or concatenation to it.
            this.setState({resultNames: []})

            var fullList = []
            var data = []
            var tempList = []

            // get search URL prepared for APPLE iTunes API. --> works over proxy
            const url = "/search?term=" + this.props.searchTerm + "&entity=" + this.props.mediaType
            const response = await fetch(url)

            data = await response.json()
            fullList = data.results
    
            // Build *just* the list of titles
            for (const listEntry of fullList) {
                tempList = tempList.concat([listEntry.trackName])
            }

            // sort Alphabetically
            tempList.sort()

            // update resultNames with fully sorted list
            this.setState({resultNames: tempList})

        }
    }

    async componentDidMount() {
        const url = "/search?term=" + this.props.searchTerm + "&entity=" + this.props.mediaType
        const response = await fetch(url)

        var fullList = []
        var data = []
        var tempList = []

        data = await response.json()
        fullList = data.results

        for (const listEntry of fullList) {
            tempList = tempList.concat([listEntry.trackName])
        }

        tempList.sort()
        this.setState({resultNames: tempList})
    }

    render() {
        console.log(this.props)
        const resultsList = this.state.resultNames.map(
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
