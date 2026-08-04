const candidato = {
    name: "Vivian",
    idade: 34,
    areaInteresse: "Desenvolvimento Frontend júnior",
    habilidades: [
        "Javascript", "Git", "GitHub", "CSS"
    ],
    TempoExperiencia: "Sem experiência profissional"
}

console.log(candidato)


const vagas = [
    {"empresa": "Virtual Quest", "cargo": "Desenvolvedor Front-end júnior", "listaRequisitos" : [
        "Javascript", "Git", "CSS"
    ]},

    {"empresa": "Talent&Tech", "cargo": "Desenvolvedor Júnior", "listaRequisitos" : [
        "Git", "Python", "Javascript", "HTML5"
    ]},

    {"empresa": "Sistemas.net", "cargo": "Desenvolvedor Front-end júnior", "listaRequisitos": [
        "HTML5", "CSS", "React", "Angular"
    ]}
]

console.log(vagas)


vagas.forEach((vaga) => {
    
    let pontos = 0

    vaga.listaRequisitos.forEach((requisito) => {
        
        let habilidadeEncontrada = candidato.habilidades.find((habilidade) => {
        
            if (habilidade === requisito) {
                return true
            } else {
                return false
        }    
        })

        if (habilidadeEncontrada) {
            pontos++
        }

    })

    let percentual = (pontos / vaga.listaRequisitos.length) * 100

    console.log("Empresa: " + vaga.empresa)

    console.log("Cargo: " + vaga.cargo)

    console.log("Compatibilidade: " + percentual + "%")

})