import React from 'react'

export default class SearchResults extends React.Component {
    constructor(props) {
        super()
        this.state = {
            mediaType: "movie",
            searchTerm: "",
            resultNames: []
        }

        this.updateSearchResults = this.updateSearchResults.bind(this);
    }

    async updateSearchResults() {
        // get search URL prepared for APPLE iTunes API. --> works over proxy, set in package.json
        const url = "/search?term=" + this.props.searchTerm + "&entity=" + this.props.mediaType
        const response = await fetch(url)

        let fullList = []
        let data = []
        let tempList = []

        data = await response.json()
        fullList = data.results

        // Build *just* the list of titles
        for (const listEntry of fullList) {
            tempList = tempList.concat([listEntry.trackName])
        }

console.log(tempList)
        // return sorted, Alphabetically
        return tempList.sort()

        //  Set up an error message if iTunes is clueless
        if (tempList.length == 0) {
            tempList = tempList.concat("Sorry, iTunes returned no items")
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.searchTerm !== prevProps.searchTerm ||
            this.props.mediaType !== prevProps.mediaType) {
            // Reset resultNames to ensure there are no remnants or concatenation to it.
            this.setState({resultNames: []})

            // update resultNames with fully sorted list
            this.setState({resultNames: await this.updateSearchResults()})
        }
    }

    async componentDidMount() {
        this.setState({resultNames: await this.updateSearchResults()})
    }


    render() {
        console.log(this.props)
        const resultsList = this.state.resultNames.map(
            (item) =>
            <li className="nwm-list-item" key={item}>{item}</li>
        )
        return (
            <div>
                <ul>
                    {resultsList}
                </ul>
            </div>
        )
    }

}
