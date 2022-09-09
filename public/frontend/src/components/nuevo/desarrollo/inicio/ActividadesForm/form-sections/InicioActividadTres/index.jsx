import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import InputForm  from "../../../../../commons/forms/InputForm";
import SelectForm from "../../../../../../commons/forms/SelectForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { InicioActividadTresSchema } from '../../../../../../../schemas/desarrollo/inicio/inicio-desa-schema';


const InicioActividadTres = () => {
  
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(InicioActividadTresSchema),
        defaultValues: {
            tipoProponente: "",
            areaBDP: "",
        }
    })

    const onSubmit = data => console.log(data);
    
    return (
        <>
            <p>3.- Revisión del proponente es un área/unidad del banco</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row className="mb-3 gap-4">
                    <Col> 
                        <SelectForm name="tipoProponente" label="Tipo proponente" options="Choose option" register={register} errors={errors}/>
                    </Col>
                    <Col> 
                        <SelectForm name="areaBDP" label="Area BDP" options="Choose option" register={register} errors={errors}/>
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

export default InicioActividadTres;