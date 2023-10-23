// filter 

// tem a função de retornar determinados elementos do array

const filtroMaior18=(valor)=>{
    if(valor >= 18)
    return valor
}

const idades=[15, 32, 21, 44, 18, 17, 50, 12]
const maior=idades.filter(filtroMaior18)

console.log(idades, maior)