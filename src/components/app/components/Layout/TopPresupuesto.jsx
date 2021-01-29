
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLayoutAction, activarErrorAction, crearNuevoIngresoAction, crearNuevaMetaAction, crearNuevoGastoAction} from "../../../../actions/presupuestoActions"

import { obtenerDatosAction } from "../../../../actions/calculosAction"
import AddIcon from '@material-ui/icons/Add';
import AddPresupuesto from "./addPresupuesto"
import Meta from "./Meta"
import AddGasto from "./addGasto"

const TopPresupuesto = ({actualId, handleSubmit}) => {


    const [ ingresoShow , guardarIngresoShow ] = useState()
    const [ gastoShow , guardarGastoShow ] = useState()
    const [ restanteCalculos , guardarRestanteCalculos ] = useState()
    const [ restanteMetaCalculos , guardarRestanteMetaCalculos ] = useState()

    const [ gastoFijo, guardarGastoFijo ] = useState()
    const [ gastoVariable, guardarGastoVariable ] = useState()
    const [ gastoHormiga, guardarGastoHormiga ] = useState()
    const [ gastoOcio, guardarGastoOcio ] = useState()
    const [ gastoOtro, guardarGastoOtro ] = useState()


            const dispatch = useDispatch()

        const obtenerDatos = (ingresos, gastos, metaReducer) => dispatch( obtenerDatosAction(ingresos, gastos, metaReducer) )


        //obtener datos
        const ingresos = useSelector(state => state.presupuesto.ingresos);
        const gastos = useSelector(state => state.presupuesto.gastos);
        const metaReducer = useSelector(state => state.presupuesto.meta);



        //Obtener datos Calculos
        const ingresosCalculos = useSelector(state => state.calculos.ingresos);
        const gastosCalculos = useSelector(state => state.calculos.gastos);
        

            //Calcular gastos por tipo
            const calculosTipo = (gastosCalculos) => {


                //Fijo 
                let fijo = gastosCalculos.reduce( (total, gasto) => ( gasto.tipo === "Fijo" ? total + Number(gasto.monto) : total), 0 )
                    guardarGastoFijo(fijo)

                let Variable = gastosCalculos.reduce( (total, gasto) => ( gasto.tipo === "Variable" ? total + Number(gasto.monto) : total), 0 )
                guardarGastoVariable(Variable)

                let Hormiga = gastosCalculos.reduce( (total, gasto) => ( gasto.tipo === "Hormiga" ? total + Number(gasto.monto) : total), 0 )
                guardarGastoHormiga(Hormiga)

                let Ocio = gastosCalculos.reduce( (total, gasto) => ( gasto.tipo === "Ocio" ? total + Number(gasto.monto) : total), 0 )
                guardarGastoOcio(Ocio)

                let Otro = gastosCalculos.reduce( (total, gasto) => ( gasto.tipo === "Otro" ? total + Number(gasto.monto) : total), 0 )
                guardarGastoOtro(Otro)
            };


        const calculos = ( ingresosCalculos, gastosCalculos, metaReducer) => {
            let ingresoTotal = ingresosCalculos.reduce( (total, ingreso) => total + Number(ingreso.monto), 0 );

            let gastoTotal = gastosCalculos.reduce( (total, gasto) => total + Number(gasto.monto), 0 )

            guardarIngresoShow(ingresoTotal)
            guardarGastoShow(gastoTotal)


            let restante;
            restante = ingresoTotal - gastoTotal;

            guardarRestanteCalculos(restante);


            let restanteMeta = restante - metaReducer;

            guardarRestanteMetaCalculos(restanteMeta)



        };


        useEffect ( () => {

            calculos(ingresosCalculos, gastosCalculos, metaReducer)

            calculosTipo(gastosCalculos)

        }, [ingresosCalculos, gastosCalculos, metaReducer]);
         
        
        
            useEffect ( () => {
                obtenerDatos(ingresos, gastos, metaReducer)
            }, [ ingresos, gastos, metaReducer]);


            



        
             //META
                const [ meta, guardarMeta ] = useState("");



    //UseEffect 

        const errorApp = useSelector( state => state.presupuesto.error) 

        const goBack = e => dispatch( changeLayoutAction(e) )



    /*==========================================================
      ==========================================================
                              ADDPRESUPUESTO
        ==========================================================
        ==========================================================*/

        const crearIngreso = (ingreso, actualId) => dispatch( crearNuevoIngresoAction(ingreso, actualId) );


        const crearGasto = (gasto, actualId) => dispatch( crearNuevoGastoAction(gasto, actualId) );

        const crearMeta = (meta, actualId) => dispatch( crearNuevaMetaAction(meta, actualId) );

          const erroralaAPP = (state) => dispatch( activarErrorAction(state))

    //addPresupuesto variables
    const [ nombre, guardarNombre ] = useState("");
    const [ monto, guardarMonto ] = useState("");
    const [ tipo, guardarTipo ] = useState("");

    const submitPresupuesto = (e) => {

       
           
        if ( e === "presupuesto") {
        //validar
        if ( nombre === "" || monto <= 0  || tipo === "") {
            erroralaAPP(true)
            return;
        } 

            goBack()
            erroralaAPP(false)


        //Convertir a objeto 
            const ingreso  = {
                nombre,
                monto,
                tipo,
                id: new Date().getTime()
            };

        //Enviar a la API
            crearIngreso(ingreso, actualId)

            //Vaciar state
            guardarNombre("")
            guardarMonto("")
            guardarTipo("")

        } else if ( e  === "meta") {
            //validar 
            if( meta === "" ) {

                erroralaAPP(true)
                return;
            }
            erroralaAPP(false)
            goBack()

            crearMeta(meta, actualId)
        } else if (e === "gasto") {
            //validar
        if ( nombre === "" || monto <= 0  || tipo === "") {
            erroralaAPP(true)
            return;
        } 
            goBack()
            erroralaAPP(false)


        //Convertir a objeto 
            const gasto  = {
                nombre,
                monto,
                tipo,
                id: new Date().getTime()

            };

        //Enviar a la API
            crearGasto(gasto, actualId)

            //Vaciar state
            guardarNombre("")
            guardarMonto("")
            guardarTipo("")

        }
       
    };

   




      /*==========================================================
      ==========================================================
                              TOPPRESUPUESTO
        ==========================================================
        ==========================================================*/



        //Variable para el show 

        const statepresupuesto = useSelector( state => state.presupuesto.showpresupuesto)
        const statemeta = useSelector( state => state.presupuesto.showmeta)
        const stateGasto = useSelector( state => state.presupuesto.showGasto)

    




    
    
    
    

    return ( 
        
        <div className="all-container-top-presupuesto">
            <div className="content">
                <div className="type type-1">
                    <h3>Home</h3>
                    <ul>
                        <li 
                            className="button button-top"
                            onClick={ e =>  handleSubmit("presupuesto")}
                        > <AddIcon />  Añadir Ingreso</li>

                        <li
                            className="button"
                            onClick={ e =>  handleSubmit("meta")}

                        >  <AddIcon /> Meta:${metaReducer}</li>
                        <li>Restante: ${restanteMetaCalculos} </li>
                    </ul>
                </div>


                 <div className="type type-2">
                <h3>Gastado</h3>
                <div className="container-type">
                    <div className="separador">
                        <ul>
                            <li>Fijo: ${gastoFijo}</li>
                            <li>Variable: ${gastoVariable}</li>
                            <li>Hormiga: ${gastoHormiga}</li>
                        </ul>
                    </div>
                    
                    <div className="separador">
                        <ul>
                            <li>Ocio: ${gastoOcio}</li>
                            <li>Otro: ${gastoOtro}</li>
                        </ul>
                    </div>
                </div>
                  
                </div>
                 
              <div className="type type-4">
                     <div className="right"> <p>Ingresos: ${ingresoShow}</p>  </div>
                     <div className="right"> <p>Gastado: ${gastoShow}</p></div>
                      <div className="right"><p>Restante: ${restanteCalculos}</p> </div>
                                      
                </div>

            </div>
        <hr/>

        { statepresupuesto  ? 
         <AddPresupuesto 
                guardarNombre = {guardarNombre}
                guardarMonto = {guardarMonto}
                guardarTipo = {guardarTipo}
                submitPresupuesto = {submitPresupuesto}
                errorApp = {errorApp}
        /> : null}

        {statemeta ? 
            <Meta 
                submitPresupuesto = {submitPresupuesto}
                errorApp = {errorApp}
                guardarMeta = {guardarMeta}
                meta = {meta}
            />
        :null}

        {stateGasto ? 
            <AddGasto 
                guardarNombre = {guardarNombre}
                guardarMonto = {guardarMonto}
                guardarTipo = {guardarTipo}
                submitPresupuesto = {submitPresupuesto}
                errorApp = {errorApp}         
            />
        :null}

        </div>
        );
}
 
export default TopPresupuesto;