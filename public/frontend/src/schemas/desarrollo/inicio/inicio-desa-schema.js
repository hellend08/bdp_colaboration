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
    compliance: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
}).required();


export const InicioActividadTresSchema = yup.object({
    tipoProponente: yup.string().required(),
    areaBDP: yup.string().required(),
}).required();


export const InicioActividadCuatroSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadCincoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadSeisSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const InicioActividadSieteSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadOchoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadNueveSchema = yup.object({
    observacion: yup.string().required(),
    recomendacion: yup.string().required(),
}).required();


export const InicioActividadDiezSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadOnceSchema = yup.object({
    aprobacion: yup.string().required(),
}).required();


export const InicioActividadDoceSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadTreceSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadCatorceSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadQuinceSchema = yup.object({
    observacion: yup.string().required(),
    recomendacion: yup.string().required(),
}).required();


export const InicioActividadDieciseisSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const InicioActividadDiecisieteSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadDieciochoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadDiecinueveSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadVeinteSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadVeintiunoSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadDVeintidosSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadVeintitresSchema = yup.object({
    comentarios: yup.string().required(),
    actaCons: yup.string().required(),
    matriz: yup.string().required(),
}).required();


export const InicioActividadVeinticuatroSchema = yup.object({
    comentarios: yup.string().required(),
}).required();


export const InicioActividadVeinticincoSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();


export const InicioActividadVeintiseisSchema = yup.object({
    cumplimiento: yup.string().required(),
}).required();