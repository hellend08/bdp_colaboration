import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/esm/Col";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Input from '../../../../../../commons/forms/Input';
import { dialogStore } from "../../../../../../../store/commons"
import "./style.css"
import { NuevaMatrizIntDialogSchema } from "../../../../../../../schemas/nuevo/desarrollo/inicio/forms";
import { stakeholderMatrixDesaEntity } from "../../../../../../../services/actions/project-desarrollo";

function NuevaMatrizIntDialog() {

    const { dialog, selectDialog } = dialogStore();
    const name = "nueva-matriz-int";

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(NuevaMatrizIntDialogSchema),
        defaultValues: {
            interesado: "",
            objetivo: "",
            nivel_interes: "",
            nivel_influencia: "",
            acciones_posibles_positivas: "",
            estrategias: "",
        }
    });

    const onSubmit = (data, e) => {
        if(!Object.values(errors).length) {
            console.log("error")
        }
        stakeholderMatrixDesaEntity().POST(data);
        console.log(data)
        e.target.reset()
    }
    const onClose = () => selectDialog("");

    return (
        <Modal show={name === dialog}  onHide={onClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body className='px-4 container-shadow'>
            <h5>Crear Elemento</h5>
            <Form onSubmit={handleSubmit(onSubmit)} className='mt-3 px-3'>
                <Row>
                    <Col>
                        <Input name="interesado" label="" textAlternative="Interesado" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="objetivo" label="" textAlternative="Objetivo Meta" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="nivel_interes" label="" textAlternative="Nivel de Interés" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input name="nivel_influencia" label="" textAlternative="Nivel de Influencia" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="acciones_posibles_positivas" label="" textAlternative="Acciones Posibles Positivas" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="comments" label="" textAlternative="Acciones Posibles Negativas" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Input name="estrategias" label="" textAlternative="Estrategias" register={register} errors={errors} />
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row>
            </Form>
        </Modal.Body>
        </Modal>
    );
}

export default NuevaMatrizIntDialog;