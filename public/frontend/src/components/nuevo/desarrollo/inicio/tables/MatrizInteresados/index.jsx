import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { dialogStore } from "../../../../../../store/commons"
import NuevaMatrizIntDialog from '../../modals/MatrizInteresadosModal/NuevaMatrizIntDialog';


const MatrizInteresados = () => {

    const { selectDialog } = dialogStore();

    const listMatrizInteresados = [
        {
            interesado: "Nombre",
            objetivo_meta: "Descripción",
            nivel_interes: "Bajo",
            nivel_influencia: "Bajo",
            acciones_positivas: "Bajo",
            acciones_negativas: "Bajo",
            estrategia: "Descripción",
        },
        {
            interesado: "Nombre",
            objetivo_meta: "Descripción",
            nivel_interes: "Medio",
            nivel_influencia: "Medio",
            acciones_positivas: "Medio",
            acciones_negativas: "Medio",
            estrategia: "Descripción",
        },
        {
            interesado: "Nombre",
            objetivo_meta: "Descripción",
            nivel_interes: "Alto",
            nivel_influencia: "Alto",
            acciones_positivas: "Alto",
            acciones_negativas: "Alto",
            estrategia: "Descripción",
        }
    ]

    return (
        <>
            <Button className='mb-3' variant="outline-primary" onClick={() => selectDialog("nueva-matriz-int")}>+ Elemento</Button>
            <NuevaMatrizIntDialog />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Interesado</th>
                        <th>Objetivo Meta</th>
                        <th>Nivel de Interés</th>
                        <th>Nivel de Influencia</th>
                        <th>Acciones Posibles Positivas</th>
                        <th>Acciones Posibles Negativas</th>
                        <th>Estrategias</th>
                        {/* <th className="text-center">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        listMatrizInteresados.map( (item, index) => 
                            <tr key={index + 1}>
                                <td>{item.interesado}</td>
                                <td>{item.objetivo_meta}</td>
                                <td>{item.nivel_interes}</td>
                                <td>{item.nivel_influencia}</td>
                                <td>{item.acciones_positivas}</td>
                                <td>{item.acciones_negativas}</td>
                                <td>{item.estrategia}</td>
                            </tr>
                        )
                        
                    }

                    {/* <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Descripción</td>
                        
                    </tr> */}
                    {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    
                    {/* <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Descripción</td>
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Descripción</td>
                    </tr> */}
                </tbody>
            </Table>
        </>
    )
}

export default MatrizInteresados;