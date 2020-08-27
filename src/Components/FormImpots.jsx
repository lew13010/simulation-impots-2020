import React from "react";

const FormImpots = ({user, setUser}) => {

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        setUser({...user, [name]: value})
    }

    return (
        <div className={"mt-3"}>
            <form>
                <div className={"row mb-3"}>
                    <label htmlFor="couple" className={"col-sm-2 col-form-label"}>Situation familliale</label>
                    <div className="col-sm-10">
                        <select className={"form-select"} id={"couple"} name={"couple"} defaultValue={user.couple}
                                onChange={handleChange}>
                            <option value="1">Célibataire</option>
                            <option value="2">Marié, Pacsé, en couple</option>
                        </select>
                    </div>
                </div>
                <div className={"row mb-3"}>
                    <label htmlFor="enfants" className={"col-sm-2 col-form-label"}>Nombre d'enfant à charge</label>
                    <div className={"col-sm-10"}>
                        <input className={"form-control"} id={"enfants"} name={"enfants"} type="number" min={0}
                               defaultValue={user.enfants} onChange={handleChange}/>
                    </div>
                </div>
                <div className={"row mb-3"}>
                    <label htmlFor="salaire" className={"col-sm-2 col-form-label"}>Salaire Annuel</label>
                    <div className={"col-sm-10"}>
                        <input className={"form-control"} id={"salaire"} name={"salaire"} type="number" min={0}
                               defaultValue={user.salaire} onChange={handleChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormImpots