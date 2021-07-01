const funcionarios = [
    {
        nome: "Ivan",
        sexo: "masculino",
        cursos: [
            {
                titulo: "Sistemas da informação",
                faculdade: [
                    {
                        nome: "Unime",
                        endereco: "Avenidade Luis Traquinio",
                    }
                ],
                ano: "2021",
            }
        ]
    },
    {
        nome: "Maria",
        sexo: "femenino",
        cursos: [
            {
                titulo: "Sistemas informacao",
                faculdade: [
                    {
                        nome: "Uninassau",
                        endereco: "Sei lá",
                    }
                ],
                ano: "2020",
            },
            {
                titulo: "Analise e desenvolvimento de sistemas",
                faculdade: [
                    {
                        nome: "Uninassau",
                        endereco: "Sei lá",
                    }
                ],
                ano: "2019",
            }
        ]
    },
    {
        nome: "João",
        sexo: "masculino",
        cursos: [],
    }

]

funcionarios.forEach(funcionario=> {
    if (funcionario.cursos[0]){
        console.log(`${funcionario.nome} fez os cursos:`)
        console.log(`${funcionario.cursos[0].titulo} na faculdade ${funcionario.cursos[0].faculdade[0].nome} no ano ${funcionario.cursos[0].ano}`)
    }

})