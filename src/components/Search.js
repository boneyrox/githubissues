import React, { useState } from 'react'
import styled from 'styled-components'
//import logo from 'https://www.pngfind.com/pngs/m/256-2562232_github-icon-png-download-github-icon-blue-png.png'
const Search = (props) => {
    const [userName, setUserName] = useState();
    const [repoName, setRepoName] = useState();

    function handleUsername(e) {
        setUserName(e.target.value);
    }
    function handleRepo(e) {
        setRepoName(e.target.value);
    }
    console.log(repoName);
    console.log(userName);
    return (
        <>
            <Container>
                <img src='https://image.flaticon.com/icons/png/512/25/25231.png' />
                <input type="text" placeholder='Username...' onChange={handleUsername}/>
                <input type="text" placeholder='Repository...' onChange={handleRepo}/>
                <button type='submit' onClick={()=>{
                    props.handleClickProp(userName,repoName)
                }} >SEARCH</button>
            </Container>
            
        </>
    )
}

const Container=styled.div `
display:flex;
height:6vh;
padding:0.5rem;
border-style:solid;

`

export default Search
