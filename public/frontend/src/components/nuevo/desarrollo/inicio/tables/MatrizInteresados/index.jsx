import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { dialogStore } from "../../../../../../store/commons"
import NuevaMatrizIntDialog from '../../modals/MatrizInteresadosModal/NuevaMatrizIntDialog';


const MatrizInteresados = () => {

    const { selectDialog } = dialogStore();

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
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default MatrizInteresados;