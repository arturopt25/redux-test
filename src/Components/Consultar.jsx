import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Consultar = () => {
    return (
        <div>
            <Container>
                <Consul>
                    <Titulo>Consultar Saldo</Titulo>
                    <Etidoc>Ingrese documento</Etidoc>
                    <Documento></Documento>
                    <Eticel>Ingrese Celular</Eticel>
                    <Celular></Celular>
                    <Saldo>Su saldo es: 0.00</Saldo>
                    <Botones>
                    <Enviar>Consultar</Enviar>
                    <Link to="/"><Atras>Ir atras</Atras></Link>
                    </Botones>
                </Consul>
            </Container>
        </div>
    )
}

export default Consultar

const Container = styled.div`
    width: 500px;
    height: 320px;
    background-color: white;
    margin: auto;
    margin-top: 200px;
    border-radius: 5px;

`

const Consul = styled.div`
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


const Etidoc = styled.label`
    display: flex;
    justify-content: left;
    font-size: 15px;
    letter-spacing: 0.5px;
    margin-top: 8px;


`

const Documento = styled.input`
    border-radius: 4px;
    height: 18px;
    margin-top: 5px;

`

const Eticel = styled(Etidoc)``

const Celular = styled(Documento)``

const Saldo = styled.div`
    border: 2px solid black;
    width: 150px;
    border-radius: 8px;
    margin-top: 15px;
    margin-left: 155px;
    font-family: "Avant Garde";
    text-rendering: optimizeLegibility;
    letter-spacing: .08em;
    
    


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