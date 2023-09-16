import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Select from "../../../../../commons/forms/Select";
// import InputFile from "../../../../../commons/forms/InputFile";
import { ActividadOnceSchema } from '../../../../../../schemas/nuevo/desarrollo/inicio/forms';


const ActividadOnce = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(ActividadOnceSchema),
        defaultValues: {
            aprobacion: "",
        }
    });

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>11.- Recepción por parte del Financiador de la aprobación de la Nota Conceptual</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                {/* <Row className="mb-3">
                    <Col>
                        <Select name="aprobacion" label="Aprobación" options={["Choose option"]} register={register} errors={errors} />
                    </Col>
                    <Col>
                        <InputFile label="Nota conceptual" />
                    </Col>
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary">
                    <i className="bi bi-send-fill"></i>
                    </Button>
                </Row> */}
            </form>
        </>
    );
}

export default ActividadOnce;