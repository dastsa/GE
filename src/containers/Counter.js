import React, { Component } from 'react';

import { connect } from 'react-redux';
import CounterPage from '../components/Page';
import { stat } from 'fs';


const CounterPageContainer = ({
    //Jugador
    Jpersonal,
    Jdeportiva,
    Jpapeleria,
    JparteMedico,
    JestadoFut,
    showJestadoFut,
    showJparteMedico,
    showJpapeleria,
    showJdeportiva,
    showJpersonal,

    //Profesor
    Pasistencia,
    Pcategoria,
    Pgrupo,
    Pplanearentrenamiento,
    Pformacionacademica,
    Pinformacion,
    Ppapeleria,
    Ppartidos,
    showPpartidos,
    showPasistencia,
    showPcategoria,
    showPgrupo,
    showPplanearentrenamiento,
    showPformacionacademica,
    showPinformacion,
    showPpapeleria,

    //Administrador
    Ajugador,
    Aprofesor,
    Aequipos,
    Agruposmanual,
    Aescuelas,
    Aeventorecaudo,
    Aacudientes,
    Agrupos,
    Acategorias,
    AJinformacion,
    AJinformacionD,
    AJpapeleria,

    AJestadoFut,
    APinformacion,
    APpapeleria,
    APcategoria,
    APgrupos,
    APplanearEntre,
    APasistencia,
    APgrupo,
    APsede,
    showAjugador,
    showAprofesor,
    showAescuelas,
    showAgruposmanual,
    showAgrupos,
    showAequipos,
    showAeventorecaudo,
    showAacudientes,
    showAcategorias,
    showAJinformacion,
    showAJinformacionD,
    showAJpapeleria,

    showAJestadoFut,
    showAPinformacion,
    showAPpapeleria,
    showAPcategoria,
    showAPgrupos,
    showAPplanearEntre,
    showAPasistencia,
    showAPgrupo,
    showAPsede

}) => (
        <CounterPage
            //Jugador
            Jpersonal={Jpersonal}
            Jdeportiva={Jdeportiva}
            Jpapeleria={Jpapeleria}
            JparteMedico={JparteMedico}
            JestadoFut={JestadoFut}
   
            onShowJestadoFut={showJestadoFut}
            onShowJparteMedico={showJparteMedico}
            onShowJpapeleria={showJpapeleria}
            onShowJdeportiva={showJdeportiva}
            onShowJpersonal={showJpersonal}

            //Profesor
            Pasistencia={Pasistencia}
            Pcategoria={Pcategoria}
            Pgrupo={Pgrupo}
            Pplanearentrenamiento={Pplanearentrenamiento}
            Pformacionacademica={Pformacionacademica}
            Pinformacion={Pinformacion}
            Ppapeleria={Ppapeleria}
            Ppartidos={Ppartidos}
            onShowPpartidos={showPpartidos}
            onShowPasistencia={showPasistencia}
            onShowPcategoria={showPcategoria}
            onShowPgrupo={showPgrupo}
            onShowPplanearentrenamiento={showPplanearentrenamiento}
            onShowPformacionacademica={showPformacionacademica}
            onShowPinformacion={showPinformacion}
            onShowPpapeleria={showPpapeleria}
            onShowPpartidos={showPpartidos}

            //Administrador
            Ajugador={Ajugador}
            Aprofesor={Aprofesor}
            Aequipos={Aequipos}
            Agrupos = {Agrupos}
            Agruposmanual={Agruposmanual}
            Aescuelas= {Aescuelas}
            Aeventorecaudo={Aeventorecaudo}
            Aacudientes={Aacudientes}
            Acategorias={Acategorias}
            AJinformacion={AJinformacion}
            AJinformacionD={AJinformacionD}
            AJpapeleria={AJpapeleria}

            AJestadoFut={AJestadoFut}
            APinformacion={APinformacion}
            APpapeleria={APpapeleria}
            APcategoria={APcategoria}
            APgrupos={APgrupos}
            APplanearEntre={APplanearEntre}
            APasistencia={APasistencia}
            APgrupo={APgrupo}
            APsede={APsede}
            onShowAjugador={showAjugador}
            onShowAprofesor={showAprofesor}
            onShowAgrupos = {showAgrupos}
            onShowAgruposmanual = {showAgruposmanual}
            onShowAequipos={showAequipos}
            onShowAescuelas={showAescuelas}
            onShowAeventorecaudo={showAeventorecaudo}
            onShowAacudientes={showAacudientes}
            onShowAcategorias={showAcategorias}
            onShowAJinformacion={showAJinformacion}
            onShowAJinformacionD={showAJinformacionD}
            onShowAJpapeleria={showAJpapeleria}

            onShowAJestadoFut={showAJestadoFut}
            onShowAPinformacion={showAPinformacion}
            onShowAPpapeleria={showAPpapeleria}
            onShowAPcategoria={showAPcategoria}
            onShowAPgrupos={showAPgrupos}
            onShowAPplanearEntre={showAPplanearEntre}
            onShowAPasistencia={showAPasistencia}
            onShowAPgrupo={showAPgrupo}
            onShowAPsede={showAPsede}

        />
    );

const mapStateToProps = state => {
    return {
        //Jugador
        Jpersonal: state.Jpersonal,
        Jdeportiva: state.Jdeportiva,
        Jpapeleria: state.Jpapeleria,
        JparteMedico: state.JparteMedico,
        JestadoFut: state.JestadoFut,


        //Profesor
        Pasistencia: state.Pasistencia,
        Pcategoria: state.Pcategoria,
        Pgrupo: state.Pgrupo,
        Pplanearentrenamiento: state.Pplanearentrenamiento,
        Pformacionacademica: state.Pformacionacademica,
        Pinformacion: state.Pinformacion,
        Ppapeleria: state.Ppapeleria,
        Ppartidos: state.Ppartidos,

        //Administrador
        Ajugador: state.Ajugador,
        Aprofesor: state.Aprofesor,
        Aequipos: state.Aequipos,
        Agrupos: state.Agrupos,
        Aescuelas: state.Aescuelas,
        Agruposmanual: state.Agruposmanual,
        Aeventorecaudo:state.Aeventorecaudo,
        Aacudientes: state.Aacudientes,
        Acategorias: state.Acategorias,
        AJinformacion: state.AJinformacion,
        AJinformacionD: state.AJinformacionD,
        AJpapeleria: state.AJpapeleria,

        AJestadoFut: state.AJestadoFut,
        APinformacion: state.APinformacion,
        APpapeleria: state.APpapeleria,
        APcategoria: state.APcategoria,
        APgrupos: state.APgrupos,
        APplanearEntre: state.APplanearEntre,
        APasistencia: state.APasistencia,
        APgrupo: state.APgrupo,
        APsede: state.APsede

    }
};

const mapDispatchToProps = dispatch => ({
    //Jugador
    showJdeportiva: () => dispatch({ type: 'SHOWJDEPORTIVA' }),
    showJpersonal: () => dispatch({ type: 'SHOWJPERSONAL' }),
    showJpapeleria: () => dispatch({ type: 'SHOWJPAPELERIA' }),
    showJparteMedico: () => dispatch({ type: 'SHOWJPARTEMEDICO' }),
    showJestadoFut: () => dispatch({ type: 'SHOWJESTADOFUT' }),


    //Profesor
    showPasistencia: () => dispatch({ type: 'SHOWPASISTENCIA' }),
    showPcategoria: () => dispatch({ type: 'SHOWPCATEGORIA' }),
    showPgrupo: () => dispatch({ type: 'SHOWPGRUPO' }),
    showPplanearentrenamiento: () => dispatch({ type: 'SHOWPPLANEARENTRENAMIENTO' }),
    showPformacionacademica: () => dispatch({ type: 'SHOWPFORMACIONACADEMICA' }),
    showPinformacion: () => dispatch({ type: 'SHOWPINFORMACION' }),
    showPpapeleria: () => dispatch({ type: 'SHOWPPAPELERIA' }),
    showPpartidos:() => dispatch({ type: 'SHOWPPARTIDO'}),

    //Administrador
    showAjugador: () => dispatch({ type: 'SHOWAJUGADOR' }),
    showAprofesor: () => dispatch({ type: 'SHOWAPROFESOR' }),
    showAequipos: () => dispatch({ type: 'SHOWAEQUIPOS' }),
    showAescuelas: () => dispatch({ type: 'SHOWAESCUELAS' }),
    showAgruposmanual: () => dispatch({ type: 'SHOWAGRUPOSMANUAL' }),
    showAgrupos: () => dispatch({ type: 'SHOWAGRUPOS' }),
    showAeventorecaudo: () => dispatch({ type: 'SHOWAEVENTORECAUDO'}),
    showAacudientes: () => dispatch({ type: 'SHOWAACUDIENTES' }),
    showAcategorias: () => dispatch({ type: 'SHOWACATEGORIAS' }),
    showAJinformacion: () => dispatch({ type: 'SHOWAJINFORMACION' }),
    showAJinformacionD: () => dispatch({ type: 'SHOWAJINFORMACIOND' }),
    showAJpapeleria: () => dispatch({ type: 'SHOWAJPAPELERIA' }),

    showAJestadoFut: () => dispatch({ type: 'SHOWAJESTADOFUT' }),
    showAPinformacion: () => dispatch({ type: 'SHOWAPINFORMACION' }),
    showAPpapeleria: () => dispatch({ type: 'SHOWAPPAPELERIA' }),
    showAPcategoria: () => dispatch({ type: 'SHOWAPCATEGORIA' }),
    showAPgrupos: () => dispatch({ type: 'SHOWAPGRUPOS' }),
    showAPplanearEntre: () => dispatch({ type: 'SHOWAPPLANEARENTRE' }),
    showAPasistencia: () => dispatch({ type: 'SHOWAPASISTENCIA' }),
    showAPgrupo: () => dispatch({ type: 'SHOWAPGRUPO' }),
    showAPsede: () => dispatch({ type: 'SHOWAPSEDE' })

});

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

const ComponentWithConnectionToRedux = createConnection(CounterPageContainer);

export default ComponentWithConnectionToRedux;