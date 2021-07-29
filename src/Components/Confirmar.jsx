import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'




const Confirmar = () => {
    return (
        <div>
            <Container>
                <Confir>
                    <Titulo>Confirmar Pago</Titulo>
                    <Etitok>Ingrese el Token</Etitok>
                    <Token></Token>
                    <Botones>
                    <Enviar>Confirmar</Enviar>
                    <Link to="/"><Atras>Ir atras</Atras></Link>
                    </Botones>
                </Confir>
            </Container>
        </div>
    )
}

export default Confirmar

const Container = styled.div`
    width: 500px;
    height: 240px;
    background-color: white;
    margin: auto;
    margin-top: 200px;
    border-radius: 5px;

`

const Confir = styled.div`
    padding: 20px 18px;
    display: flex;
    flex-direction: column;


`

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 25px;
    font-family: "Avant Garde";
    text-rendering: optimizeLegibility;
    letter-spacing: .08em;

`

const Etitok = styled.label`
    display: flex;
    justify-content: left;
    font-size: 15px;
    letter-spacing: 0.5px;
    margin-top: 8px;


`

const Token = styled.input`
    border-radius: 4px;
    height: 18px;
    margin-top: 5px;

`

const Enviar = styled.button`
    width: 70px;
    font-size: 12px;
    margin-top: 15px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #77CC68;
    color: white;
    margin-left: 310px;
    
`

const Atras = styled.button`
    width: 70px;
    font-size: 12px;
    margin-top: 15px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #008CBA;
    color: white;
    margin-left: 8px;
    


`

const Botones = styled.div`
    display: flex;
    
    

`