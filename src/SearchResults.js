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
    }

    async componentDidUpdate(prevProps) {
        if (this.props.searchTerm !== prevProps.searchTerm) {

            var fullList = []
            var data = []
            var tempList = []
    
            const url = "/search?term=" + this.props.searchTerm + "&entity=" + this.props.mediaType
            const response = await fetch(url)

            data = await response.json()
            fullList = data.results
    
            for (const listEntry of fullList) {
                tempList = tempList.concat([listEntry.trackName])
            }
    
            tempList.sort()
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
