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

let maiorCompatibilidade = 0
let vagaMaisCompativel = null

vagas.forEach((vaga) => {
    
    let pontos = 0
    let habilidadesFaltantes = []

    vaga.listaRequisitos.forEach((requisito) => {
        
        let habilidadeEncontrada = candidato.habilidades.find((habilidade) => {
        
            return habilidade === requisito   
        })

        if (habilidadeEncontrada) {
            pontos++
        } else {
            habilidadesFaltantes.push(requisito)
        }

    })

    let percentual = (pontos / vaga.listaRequisitos.length) * 100

    //console.log("Empresa: " + vaga.empresa)

    //console.log("Cargo: " + vaga.cargo)

    //console.log("Compatibilidade: " + percentual + "%")

    if (percentual > maiorCompatibilidade) {
        maiorCompatibilidade = percentual
        vagaMaisCompativel = vaga
    }

    if (percentual <= 49) {
        console.log(`${vaga.empresa}: ${percentual}% - Baixa compatibilidade`)
    }

    else if (percentual <= 79 && percentual >= 50) {
        console.log(`${vaga.empresa}: ${percentual}% - Média compatibilidade`)
    }

    else if (percentual <= 100 && percentual >= 80) {
        console.log(`${vaga.empresa}: ${percentual}% - Alta compatibilidade`)
    }

    console.log("Habilidades que faltam: ")

    if (habilidadesFaltantes.length === 0) {
        console.log("Você possuí todos os requisitos para a vaga!")
    } else {
        habilidadesFaltantes.forEach((habilidade) => {
            console.log("- " + habilidade)
        })
    }
})


console.log("Vaga mais compatível: " + vagaMaisCompativel.empresa)
console.log(`${vagaMaisCompativel.cargo} ${maiorCompatibilidade}%`)


class NovaVaga {
     constructor(empresa, cargo, listaRequisitos) {
         this.empresa = empresa
         this.cargo = cargo
         this.listaRequisitos = listaRequisitos
     }

     describe() {
         return `Empresa: ${this.empresa}, Cargo: ${this.cargo}, Lista de requisitos: ${this.listaRequisitos}`
     }
}


class NovasVagas extends NovaVaga {
    constructor(empresa, cargo, listaRequisitos, modalidade){
        super(empresa, cargo, listaRequisitos)
        this.modalidade = modalidade
    }

    describe() {
        return `Empresa: ${this.empresa}, Cargo: ${this.cargo}, Lista de requisitos: ${this.listaRequisitos} Modalidade: ${this.modalidade}`
    }
        
}


function CarregandoNovaVaga() {
    return new Promise((resolve) => {
        console.log("Nova vaga encontrada! Carregando dados do servidor...")

        setTimeout(() => {
            resolve([
                {
                    empresa: "Technópolis",
                    cargo: "Desenvolvedor Trainee",
                    listaRequisitos: [
                        "SQL", "React", "Angular"
                    ],
                    modalidade: "Home office"
                }
            ])
        }, 4000)
    })
}

async function start() {
    try {
        const data = await CarregandoNovaVaga()

        const carregouNovaVaga = data.map((item) => {
            return new NovasVagas(item.empresa, item.cargo, item.listaRequisitos, item.modalidade)
        })

        console.log(carregouNovaVaga)

        carregouNovaVaga.forEach((vaga) => {
            compararNovaVaga(vaga)
        })
    } catch (error) {
        console.log("Erro ao carregar dados do servidor!")
    }
}

start()


function compararNovaVaga(vaga) {

    let pontos = 0

    vaga.listaRequisitos.forEach((requisito) => {

        let habilidadeEncontrada = candidato.habilidades.find((habilidade) => {

            return habilidade === requisito;

        });

        if (habilidadeEncontrada) {
            pontos++
        }

    });

    let percentual = (pontos / vaga.listaRequisitos.length) * 100

    if (percentual <= 49) {
        console.log(`${vaga.empresa}: ${percentual}% - Baixa compatibilidade`)
    }

    else if (percentual <= 79 && percentual >= 50) {
        console.log(`${vaga.empresa}: ${percentual}% - Média compatibilidade`)
    }

    else if (percentual <= 100 && percentual >= 80) {
        console.log(`${vaga.empresa}: ${percentual}% - Alta compatibilidade`)
    }
}