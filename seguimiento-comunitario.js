let semana = 1
const semanasdeseguimientos = 4
let propuestasatendidas = 0

console.log ("seguimiento comunitario semanal")

while (semana <= semanasdeseguimientos) {
    console.log ("semana de seguimiento numero:" , semana )
    propuestasatendidas = propuestasatendidas + 2 
    console.log("propuestas atendidas hasta ahora:", propuestasatendidas)
    semana = semana + 1
}
console.log("seguimiento comunitario finalizado.")
console.log("total de propuestas atendidas:", propuestasatendidas)