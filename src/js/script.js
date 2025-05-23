var formCadastro = document.getElementById("form-cadastro")
    
var listaAlunos = []

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault()
    var nomeAluno = document.getElementById("nome").value
    var matriculaAluno = document.getElementById("matricula").value
    var idadeAluno = document.getElementById("idade").value
    var maeAluno = document.getElementById("mae").value
    var telefoneAluno = document.getElementById("telefone").value

    var objetoAluno = {
        nome: nomeAluno,
        matricula: matriculaAluno,
        idade: idadeAluno,
        nomeMae: maeAluno,
        telefone: telefoneAluno
    }

    console.log(listaAlunos)

    listaAlunos.push(objetoAluno)
})
