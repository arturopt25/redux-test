import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectUserCelular, selectUserDocumento, selectUserEmail, selectUserNombre } from '../features/User/userSlice'

const Register = () => {



    const dispatch = useDispatch()
    const userDoc = useSelector(selectUserDocumento);
    const userName = useSelector(selectUserNombre);
    const userEmail = useSelector(selectUserEmail);
    const userCel = useSelector(selectUserCelular);



    const SignIn = () => {
        
    }


    return (
        <div>
           <Container>
               <Registro>
                   <Titulo>registrar cliente</Titulo>
                   <Etidoc>Ingrese Documento</Etidoc>
                   <Documento name="documento"></Documento>
                   <Etinom>Ingrese Nombre</Etinom>
                   <Nombre name="nombre"></Nombre>
                   <Etimail>Ingrese Email</Etimail>
                   <Email name="email"></Email>
                   <Eticel>Ingrese Telefono</Eticel>
                   <Celular name="celular"></Celular>
                   <Botones>
                    <Enviar onSubmit={SignIn}>Registrar</Enviar>
                    <Link to="/"><Atras>Ir atras</Atras></Link>
                    </Botones>
               </Registro>
               
           </Container> 
        </div>
    )
}

export default Register

const Container = styled.div`
    width: 520px;
    height: 370px;
    background-color: white;
    margin: auto;
    margin-top: 200px;
    border-radius: 5px;
`
const Registro = styled.div`
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


const Nombre = styled(Documento)`

`


const Email = styled(Documento)`

`


const Celular = styled(Documento)`

`

const Etidoc = styled.label`
    display: flex;
    justify-content: left;
    font-size: 15px;
    letter-spacing: 0.5px;
    margin-top: 8px;
    

`

const Etinom = styled(Etidoc)``

const Etimail = styled(Etidoc)``

const Eticel = styled(Etidoc)``


const Enviar = styled.button`
    width: 70px;
    font-size: 12px;
    margin-top: 15px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #77CC68;
    color: white;
    margin-left: 320px;

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