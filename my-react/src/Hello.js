import React from "react";
function Hello(props){
    const {nama, pesan} = props;
    return(
    <h1>
        Hello {nama}, {pesan}
    </h1>
    );
}


    Hello.defaultProps = {
        nama :"Nadine Amanda Putri",
        pesan : "Aku Pacar Felix",
    }

    export default Hello;