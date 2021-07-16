import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

state = {
    gifs: []
}


render() {
    return(
        <div>
            <p>
            <GifSearch fetchGIFs={this.fetchGIFs} />
            <GifList gifs={this.state.gifs} />
            </p>
        </div>
    )
}

fetchGIFs(query = 'cats') {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(({data}) => {
        this.setState({
           gifs: data.map( gif => ({url: gif.images.original.url}))
        })
        debugger
    })
}

componentDidMount() {
    this.fetchGIFs()
}

}


export default GifListContainer