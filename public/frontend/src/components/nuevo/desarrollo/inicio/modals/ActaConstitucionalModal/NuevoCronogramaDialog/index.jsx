import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputDate from '../../../../../../commons/forms/InputDate';
import Input from "../../../../../../commons/forms/Input";
import { dialogStore } from "../../../../../../../store/commons"
import "./style.css";
import { NuevoCronogramaDialogSchema } from "../../../../../../../schemas/nuevo/desarrollo/inicio/forms";
import { calendarDesaEntity } from "../../../../../../../services/actions/project-desarrollo";


function NuevoCronogramaDialog() {

  const { dialog, selectDialog } = dialogStore();

  const name = "nuevo-cronograma";
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(NuevoCronogramaDialogSchema),
    defaultValues: {
      hito: "",
      fecha_inicio: null,
      fecha_fin: null,
    }
  });

  const onSubmit = data => {
    if(!Object.values(errors).length) {
      console.log("error")
    }
    calendarDesaEntity().POST(data);
    console.log(data);
  }
  const onClose = () => selectDialog("");

  return (
    <Modal show={name === dialog}  onHide={onClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='px-4 container-shadow'>
        <h5>Crear Actividad</h5>
        <Form onSubmit={handleSubmit(onSubmit)} className='mt-4 px-3'>
            <Input name="hito" textAlternative="Hito" label="" placeholder="" register={register} errors={errors}/>
            <Row className="mb-3">
                <InputDate name="fecha_inicio" label="Fecha Inicio" type="date" register={register} errors={errors} />
            </Row>
            <InputDate name="fecha_fin" label="Fecha fin" type="date" register={register} errors={errors} />
            <Row className="d-flex flex-row-reverse pr-3 mt-4">
                <Button  className="btn-sumit" type="submit" variant="primary">
                    <i className="bi bi-send-fill"></i>
                </Button>
            </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NuevoCronogramaDialog;