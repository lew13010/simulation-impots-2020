const TranchesImpots = [
    { min: 0, max: 10064, taux: 0 },
    { min: 10065, max: 25659, taux: 11 },
    { min: 25660, max: 73369, taux: 30 },
    { min: 73370, max: 157806, taux: 41 },
    { min: 157807, max: Infinity, taux: 45 }
]

export {
    TranchesImpots,
}
