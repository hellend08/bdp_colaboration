import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import NuevoEstructuraOrgDialog from "../../modals/ActaConstitucionalModal/NuevoEstructuraOrgDialog";
import { dialogStore } from "../../../../../../store/commons"


const ActaEstructuraOrg = () => {

    const { selectDialog } = dialogStore();

    return (
        <>
            <Row className="d-flex flex-row justify-content-between align-items-center mb-3">
                <p className="mb-0 w-50">Estructura Organizacional</p>
                <Button className="btn-modal" variant="outline-primary" onClick={() => selectDialog('nuevo-estructura-org')}>+ Elemento</Button>
            </Row>
            <NuevoEstructuraOrgDialog />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Nivel</th>
                        <th>Cargo</th>
                        <th>Nombre</th>
                        {/* <th className="text-center">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Objetivo</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>1.1</td>
                        <td>Componente</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>1.1.1</td>
                        <td>Producto</td>
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

export default ActaEstructuraOrg;