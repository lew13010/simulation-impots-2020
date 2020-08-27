import React from "react";

const TableauResults = ({user, impots}) => {
    const totalImpots = Math.floor(impots.reduce((a, b) => a + b, 0))
    return (
        <table className={"table table-bordered table-hover"}>
            <tbody>
            {impots.map((impot, index) => impot > 0 ? (
                <tr className={"table-warning"} key={index}>
                    <th>Tranche {index}</th>
                    <td className={"text-right"}>{Number.parseFloat(impot).toFixed(2)}</td>
                </tr>
                ) : (<tr key={index}></tr>)
            )}
            <tr className={"table-danger"}>
                <th>Total Impots</th>
                <th className={"text-right"}>{totalImpots}</th>
            </tr>
            <tr className={"table-success"}>
                <th>Total Net</th>
                <th className={"text-right"}>{user.salaire - totalImpots}</th>
            </tr>
            </tbody>
        </table>
    )
}

export default TableauResults