import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputForm from '../../../../commons/forms/InputForm';

const schema = yup.object({
  firstName: yup.string().required(),
  //age: yup.number().positive().integer().required(),
}).required();

const RegistroForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm name="firstName" type="text" label="Primer nombre" placeholder="1°" register={register} errors={errors} />
        <input type="submit" />
      </form>
    );
}
  
export default RegistroForm;