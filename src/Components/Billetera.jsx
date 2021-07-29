import React from 'react'
import styled from 'styled-components'
import Register from './Register'
import { Link } from 'react-router-dom'

const Billetera = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Titulo>Billetera</Titulo>
                    <Link to="/register"><Registrar>Registrar</Registrar></Link>
                    <Link to="/recarga"><Recargar>Recargar</Recargar></Link>
                    <Link to="/pagar"><Pagar>Pagar</Pagar></Link>
                    <Link to="/confirmar"><Confirmar>Confirmar</Confirmar></Link>
                    <Link to="/consultar"><Consultar>Consultar</Consultar></Link>

                </Main>
            </Container>
        </div>
    )
}

export default Billetera


const Container = styled.div`
    width: 900px;
    height: 500px;
    background-color: white;
    margin: auto;
    margin-top: 120px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

`

const Main = styled.div`
    padding-top: 20px;

`

const Registrar = styled.button`
    width: 200px;
    height: 80px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 1px solid black;
    margin: 20px 120px;
    font-size: 25px;
    background-color: #008CBA;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    font-family: "Avant Garde";

    &:hover {
        background-color: white;
        border: 3px solid #008CBA;
    }


`

const Recargar = styled(Registrar)``

const Pagar = styled(Registrar)``


const Confirmar = styled(Registrar)``


const Consultar = styled(Registrar)``

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 30px;
    font-family: "Avant Garde";
    text-rendering: optimizeLegibility;
    letter-spacing: .08em;
    


`