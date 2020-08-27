import React, {useEffect, useState} from 'react';
import FormImpots from "./Components/FormImpots";
import TableauResults from "./Components/TableauResults";
import {TranchesImpots} from "./datas/TranchesImpots"

function App() {

    const [user, setUser] = useState({
        couple: 1,
        enfants: 0,
        salaire: 0
    })
    const [impots, setImpots] = useState([])

    function calculParts() {
        let parts = 1
        if (user.enfants >= 3) {
            parts = +user.couple + (user.enfants - 1)
        } else {
            parts = +user.couple + (user.enfants / 2)
        }
        return parts
    }

    function calculImpots() {
        const parts = calculParts()
        const salaireImposable = user.salaire / parts
        const impotsArray = []
        TranchesImpots.map((tranche, index) => {
            if (salaireImposable < tranche.min){
                impotsArray.push(0)
            }else if (salaireImposable > tranche.min){
                if (salaireImposable < tranche.max){
                    impotsArray.push(((salaireImposable - (tranche.min)) * (tranche.taux/100)) * parts)
                }else{
                    impotsArray.push(((tranche.max - (tranche.min)) * (tranche.taux/100)) * parts)
                }
            }
        })
        setImpots(impotsArray)
    }

    useEffect(() => {
        calculImpots()
    }, [user])

    return (
        <div className="container">
            <FormImpots user={user} setUser={setUser}/>
            <TableauResults user={user} impots={impots}/>
        </div>
    );
}

export default App;
