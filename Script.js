const filhos = [
    {nome: "Theo", sexo: "Male"},
    {nome: "Julia", sexo: "Female"},
    {nome: "Laura", sexo: "Female"},
    {nome: "Pedro", sexo: "Male"},
    {nome: "Ana", sexo: "Female"}

]

const sexoM = filhos.filter((qqcoisa) => {return qqcoisa.sexo === "Male"})

const sexoF = filhos.filter(filtrando)

function filtrando(qqcoisa)
{
    return qqcoisa.sexo === "Female"
}

console.log(sexoM)
console.log(sexoF)

