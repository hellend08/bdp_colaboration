import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import NuevoCronogramaDialog from "../../modals/ActaConstitucionalModal/NuevoCronogramaDialog";
import { dialogStore } from "../../../../../../store/commons"
import "./style.css"


const ActaCronograma = () => {

    const { selectDialog } = dialogStore();

    const listActaCronograma = [
        {
            hitos: "Actividad 1",
            inicio: "12/12/9999",
            fin: "12/12/9999",
        },
        {
            hitos: "Actividad 2",
            inicio: "12/12/9999",
            fin: "12/12/9999",
        },
        {
            hitos: "Actividad 3",
            inicio: "12/12/9999",
            fin: "12/12/9999",
        },
    ]

    return (
        <>
            <Row className="d-flex flex-row justify-content-between align-items-center mb-3">
                <p className="mb-0 w-25">Cronograma</p>
                <Button className="btn-modal" variant="outline-primary" onClick={() => selectDialog('nuevo-cronograma')}>+ Actividad</Button>
            </Row>
            <NuevoCronogramaDialog />
            <Table striped bordered hover size="sm" className="mb-4">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Hitos</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        {/* <th className="text-center">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        listActaCronograma.map( (item,index)=>
                            <tr key={index + 1}>
                                <td>{item.hitos}</td>
                                <td>{item.inicio}</td>
                                <td>{item.fin}</td>
                            </tr>
                        )
                    }

                    {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    {/* <tr>
                        <td>Actividad 1</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                    </tr>
                    <tr>
                        <td>Actividad 2</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                    </tr>
                    <tr>
                        <td>Actividad 3</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                    </tr> */}
                </tbody>
            </Table>
        </>
    )
}

export default ActaCronograma;