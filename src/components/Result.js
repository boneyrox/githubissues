import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const Result = (props) => {

    const [apiData, setApiData] = useState()



    useEffect(() => {


        fetch(`https://api.github.com/repos/${props.userProp}/${props.repoProp}/issues`)
            .then(response => response.json())
            .then(data => setApiData([...data]))
            .catch(error => console.log('error', error));


    }, [props])


    setInterval(console.log('apidata:', apiData), 2000)

    return (
        <><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            <Container>
                {
                    apiData ? apiData.map((obj, index) => {
                        const days = Math.floor((Date.parse(new Date().toISOString()) - Date.parse(obj.updated_at)) / 86400000)
                        
                        return <Cards key={index}>
                            <WrapperGeneral>
                                <input type="checkbox" />
                            </WrapperGeneral>
                            <WrapperMain>
                                <WrapperGeneral>
                                    <a href={obj.html_url} style={{ texDecoration: 'none !important' }} ><h3>
                                        {obj.title}

                                    </h3></a>
                                    {obj.labels.map((label, id) => {
                                        return <WrapperGeneral style={{ borderRadius:'2rem',borderStyle:'groove',height:'1vh',padding:'1vh',backgroundColor:`#${label.color}` }}>
                                            <label key={`label_${id}`} >{label.name}</label>
                                        </WrapperGeneral>
                                    })}
                                </WrapperGeneral>
                                <WrapperGeneral>
                                    <p>#{obj.number} opened {days} days ago by {obj.user.login}</p>
                                </WrapperGeneral>

                            </WrapperMain>
                            <WrapperGeneral style={{ alignSelf: 'flex-end' }} >
                                <p>Comments</p>
                            </WrapperGeneral>

                        </Cards>
                    }) : null
                }

            </Container>
        </>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
    font-family: 'Roboto', sans-serif;
    margin:2rem;

`
const Cards = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:row;
    border-style:groove;
    margin:0.1rem;
    &:hover{
         background: #E1E0DE;
    transform: translateY(0);
    }
`

const WrapperGeneral = styled.div`
    display:flex;
    align-items:center;
    margin-right:1vw;
    margin-left:1vw;


`
const WrapperMain = styled.div`
    display:flex;
    flex-direction:column;
    width:90vw;
   


`

export default Result
