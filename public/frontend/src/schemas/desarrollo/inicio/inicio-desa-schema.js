import * as yup from "yup";

export const InicioActividadUnoSchema = yup.object({
    descripcion: yup.string().required(),
    tipo: yup.string().required(),
    sector: yup.string().required(),
    actividadEconomica: yup.string().required(),
    origen: yup.string().required(),
    cumplimientoODS: yup.string().required(),
    objetivos: yup.string().required(),
    justificacion: yup.string().required(),
    enfoque: yup.string().required(),
    aceptaComponentesMitigación: yup.boolean().required(),
    areaMitigacion: yup.string().required(),
    mitigacionEstimada: yup.string().required(),
    aceptaComponentesAdaptacion: yup.boolean().required(),
    cantBeneficiarios: yup.number().positive().integer().required(),
    poblacion: yup.number().positive().required(),
    costoTotal: yup.number().positive().required(),
    duracion: yup.number().positive().integer().required(),
    aceptaInstrumentoFinanciero: yup.boolean().required(),
    tipoInstrumentoFinanciero: yup.string().required()
}).required();


export const InicioActividadDosSchema = yup.object({
        startDate: yup.string().required(),
        endDate: yup.string().required(),
        observations: yup.string().required(),
}).required();