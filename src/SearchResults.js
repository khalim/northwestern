import React from 'react'

export default class SearchResults extends React.Component {
    state = {
        mediaType: "movie",
        searchTerm: "raider",
        data: [],
        list: [],
        resultNames: []
    }
    async componentDidMount() {
        const url = "/search?term=" + this.state.searchTerm + "&entity=" + this.state.mediaType
        const response = await fetch(url)

        this.state.data = await response.json()
        this.setState({list: this.state.data.results})

        for (const name of this.state.list) {
            this.setState({resultNames: this.state.resultNames.concat(name.trackName)})
            console.log(name.trackName)
        }
        this.state.resultNames.sort()
        console.log(this.state.resultNames)
        this.render()
    }
    render() {
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


/*
                    {this.state.list[0].trackName}
                    {this.state.data.map(item => (
                        <li key={item}></li>
                    ))}
                    {this.state.list.map(item => (
                        <li key={item.trackName}>{item.trackName}</li>
                    ))}
*/