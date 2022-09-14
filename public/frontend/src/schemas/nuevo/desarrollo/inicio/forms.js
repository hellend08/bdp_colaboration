import * as yup from "yup";

export const ActividadUnoSchema = yup.object({
    descripcion: yup.string().required(),
    tipo_id: yup.number().positive().required(),
    sector_id: yup.number().positive().required(),
    actividad_economica_id: yup.number().positive().required(),
    origen_id: yup.number().positive().required(),
    cumplimiento_ods_id: yup.number().positive().required(),
    objetivo: yup.string().required(),
    justificacion: yup.string().required(),
    enfoque: yup.string().required(),
    aceptaComponentesMitigación: yup.boolean().required(),
    area_mitigacion_id: yup.number().positive().required(),
    mitigacionEstimada: yup.string().required(),
    aceptaComponentesAdaptacion: yup.boolean().required(),
    n_beneficiarios: yup.number().positive().integer().required(),
    poblacion: yup.string().required(),
    costo_total: yup.number().positive().required(),
    duracion: yup.string().required(),
    aceptaInstrumentoFinanciero: yup.boolean().required(),
    tipo_instrumento_financiero_id: yup.number().positive().required()
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
    problema_proposito: yup.string().required(),
    objetivo: yup.string().required(),
    descripcion_modelo_intervencion: yup.string().required(),
    alcance: yup.string().required(),
    presupuesto: yup.string().required(),
    riesgos_supuestos_restricciones: yup.string().required(),
    gerencia_equipo: yup.string().required(),
    mecanismos_control_cambios: yup.string().required(),
}).required();


export const NuevoCronogramaDialogSchema = yup.object({
    hito: yup.string().required(),
    fecha_inicio: yup.string().required(),
    fecha_fin: yup.string().required(),
}).required();


export const NuevoestructuraOrgDialogSchema = yup.object({
    nivel: yup.string().required(),
    cargo: yup.string().required(),
    nombre: yup.string().required(),
}).required();


export const NuevaMatrizIntDialogSchema = yup.object({
    interesado: yup.string().required(),
    objetivo: yup.string().required(),
    nivel_interes: yup.string().required(),
    nivel_influencia: yup.string().required(),
    acciones_posibles_positivas: yup.string().required(),
    estrategias: yup.string().required(),
}).required();