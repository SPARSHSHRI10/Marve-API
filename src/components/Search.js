import React,{useState} from 'react'

const Search = ({getQuery}) => {
    const[text,setText] = useState('')

    const quer =(e) => {
        setText(e.target.value)
        getQuery(e.target.value)
    }

    return (
        <section className="search">
            <form>
                <input type = "text" className="form-control" placeholder="Find a character" onChange={quer} value={text} autofocus/>
            </form>
        </section>
    )
}

export default Search
