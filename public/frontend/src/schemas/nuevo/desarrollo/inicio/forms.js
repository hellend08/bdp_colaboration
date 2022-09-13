import * as yup from "yup";

export const ActividadUnoSchema = yup.object({
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


export const ActividadDosSchema = yup.object({
    compliance: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
}).required();


export const ActividadTresSchema = yup.object({
    tipoProponente: yup.string().required(),
    areaBDP: yup.string().required(),
}).required();


export const ActividadCuatroSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadCincoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadSeisSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const ActividadSieteSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadOchoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadNueveSchema = yup.object({
    observacion: yup.string().required(),
    recomendacion: yup.string().required(),
}).required();


export const ActividadDiezSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadOnceSchema = yup.object({
    aprobacion: yup.string().required(),
}).required();


export const ActividadDoceSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadTreceSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadCatorceSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadQuinceSchema = yup.object({
    observacion: yup.string().required(),
    recomendacion: yup.string().required(),
}).required();


export const ActividadDieciseisSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const ActividadDiecisieteSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadDieciochoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadDiecinueveSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadVeinteSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadVeintiunoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadDVeintidosSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadVeintitresSchema = yup.object({
    comentarios: yup.string().required(),
    // actaCons: yup.string().required(),
    // matriz: yup.string().required(),
}).required();


export const ActividadVeinticuatroSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const ActividadVeinticincoSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const ActividadVeintiseisSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const ActaConstitucionalSchema = yup.object({
    proposito: yup.string().required(),
    objetivo: yup.string().required(),
    descripcion: yup.string().required(),
    alcance: yup.string().required(),
    presupuesto: yup.string().required(),
    riesgos: yup.string().required(),
    gerencia: yup.string().required(),
    mecanimos: yup.string().required(),
}).required();