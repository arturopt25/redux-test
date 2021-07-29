import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Recarga = () => {
    return (
        <div>
            <Container>
                <Charge>
                    <Titulo>Recargar Billetera</Titulo>
                    <Etidoc>Ingrese Documento</Etidoc>
                    <Documento></Documento>
                    <Eticel>Ingrese Celular</Eticel>
                    <Celular></Celular>
                    <Etival>Ingrese Valor</Etival>
                    <Valor></Valor>
                    <Botones>
                    <Enviar>Recargar</Enviar>
                    <Link to="/"><Atras>Ir atras</Atras></Link>
                    </Botones>
                </Charge>
            </Container>
        </div>
    )
}

export default Recarga

const Container = styled.div`
    width: 450px;
    height: 320px;
    background-color: white;
    margin: auto;
    margin-top: 200px;
    border-radius: 5px;
`


const Charge = styled.div`
    padding: 40px 18px;
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

const Documento = styled.input`
    border-radius: 4px;
    height: 18px;

`

const Celular = styled(Documento)``


const Valor = styled(Documento)``

const Etidoc = styled.label`
    display: flex;
    justify-content: left;
    font-size: 15px;
    letter-spacing: 0.5px;
    margin-top: 8px;

`

const Eticel = styled(Etidoc)``


const Etival = styled(Etidoc)``

const Enviar = styled.button`
    width: 70px;
    font-size: 12px;
    margin-top: 15px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #77CC68;
    color: white;
    margin-left: 250px;

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