import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'




const Pagar = () => {
    return (
        <div>
            <Container>
                <Pago>
                    <Titulo>Hacer un Pago</Titulo>
                    <Subti>Ingrese el Monto</Subti>
                    <Monto></Monto>
                    <Botones>
                    <Enviar>Pagar</Enviar>
                    <Link to="/"><Atras>Ir atras</Atras></Link>
                    </Botones>
                </Pago>
            </Container>
        </div>
    )
}

export default Pagar

const Container = styled.div`
    width: 300px;
    height: 210px;
    background-color: white;
    margin: auto;
    margin-top: 200px;
    border-radius: 5px;

`

const Pago = styled.div`
    padding: 20px 28px;
    display: flex;
    flex-direction: column;

`

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 18px;
    font-family: "Avant Garde";
    text-rendering: optimizeLegibility;
    letter-spacing: .08em;


`

const Subti = styled.label`
    display: flex;
    justify-content: left;
    font-size: 14px;
    letter-spacing: 0.3px;
    margin-top: 8px;


`

const Monto = styled.input`
    border-radius: 4px;
    height: 18px;
    width: 200px;
    margin-top: 3px;
    margin-bottom: 8px

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
    margin-left: 60px;



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