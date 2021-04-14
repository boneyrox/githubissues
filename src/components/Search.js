import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './logo.png'
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
                <Wrapper><img src={logo} /></Wrapper>
                <Wrapper><input style={{marginRight:'1vw'}} type="text" placeholder='Username...' onChange={handleUsername} /></Wrapper>
                <Wrapper><input style={{ marginRight: '1vw' }} type="text" placeholder='Repository...' onChange={handleRepo} /></Wrapper>
                <Wrapper><button type='submit' onClick={() => {
                    props.handleClickProp(userName, repoName)
                }} >SEARCH</button></Wrapper>




            </Container>

        </>
    )
}

const Container = styled.div`
display:flex;
flex-wrap:wrap;

height:5vh;
padding:2vh;
border-style:solid;



`
const Containertemp = styled.div`
display:flex;
flex-wrap:wrap;

height:5vh;
padding:2vh;
border-style:solid;



`
const Wrapper = styled.div`

display:flex;
justify-content:flex-start;
height:5vh ;

`

export default Search
