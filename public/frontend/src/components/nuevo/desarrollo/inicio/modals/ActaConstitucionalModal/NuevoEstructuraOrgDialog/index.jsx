import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Input from '../../../../../../commons/forms/Input';
import { dialogStore } from "../../../../../../../store/commons"
import { NuevoestructuraOrgDialogSchema } from "../../../../../../../schemas/nuevo/desarrollo/inicio/forms";
import { organizationalStructureDesaEntity } from "../../../../../../../services/actions/project-desarrollo";


function NuevoestructuraOrgDialog() {

  const { dialog, selectDialog } = dialogStore();
  const name = "nuevo-estructura-org";

  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onChange',
      resolver: yupResolver(NuevoestructuraOrgDialogSchema),
      defaultValues: {
        nivel: "",
        cargo: "",
        nombre: "",
      }
  });

  const onSubmit = (data, e) => {
    if(!Object.values(errors).length) {
      console.log("error")
    }
    organizationalStructureDesaEntity().POST(data);
    console.log(data)
    e.target.reset()
  };

  const onClose = () => selectDialog("");

  return (
    <Modal show={name === dialog}  onHide={onClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='px-4 container-shadow'>
        <h5>Crear Elemento</h5>
        <Form onSubmit={handleSubmit(onSubmit)} className='mt-3 px-3'>
            <Input name="nivel" label="Nivel" register={register} errors={errors} />
            <Input name="cargo" label="Cargo" register={register} errors={errors} />
            <Input name="nombre" label="Nombre" register={register} errors={errors} />
            <Row className="d-flex flex-row-reverse pr-3 mt-4">
                <Button className="btn-sumit" type="submit" variant="primary">
                {/* onClick={onClose} */}
                    <i className="bi bi-send-fill"></i>
                </Button>
            </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NuevoestructuraOrgDialog;