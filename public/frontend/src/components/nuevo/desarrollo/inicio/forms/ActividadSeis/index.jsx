import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from "../../../../../commons/forms/Select";
import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadSeisSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadSeis = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadSeisSchema),
        defaultValues: {
            cumplimiento: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>6.- Consulta a las Listas Especiales de Control (LEC)</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3">
                    <Col>
                        <Select name="cumplimiento" label="Cumplimiento" options="Choose option" register={register} errors={errors}/>
                    </Col>
                    <Col>
                        <InputFile label="Reporte" />
                    </Col>
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row>
            </form>
        </>
    );
}

export default ActividadSeis;