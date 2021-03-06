const page = `
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="../static/css/index.css">
    <title>Votação</title>

</head>

<body>
    <div class="votacao">
        <div class="titulo">
            <h1>Quem deve deixar as telinhas?</h1>
        </div>
        <div class="legenda">
            <p>Vote para passar a borracha e eliminar um desses participantes!</p>
        </div>
        <div class="container">

            <form action="/votacao" class="form" method="POST">
                <div class="participante btn-group-toggle">
                    <label for="participanteUm"><img src="https://bit.ly/3jKVint" alt="Foto do participante 1"
                            class="fotoParticipante rounded-circle img-fluid" id="participante1" onclick="selectImage(id)">
                        <h2>Bob Esponja</h2>
                    </label>
                    <input type="radio" class="checkParticipante" id="participanteUm" name="participante"
                        value="participante_1">
                </div>
                <div class="participante btn-group-toggle">
                    <label for="participanteDois"><img src="https://bit.ly/30MHxxc" alt="Foto do participante 2"
                            class="fotoParticipante rounded-circle img-fluid" id="participante2" onclick="selectImage(id)">
                        <h2>Popeye</h2>
                    </label>
                    <input type="radio" class="checkParticipante" id="participanteDois" name="participante"
                        value="participante_2">
                </div>
                <div>
                    <button class="votarBotao btn btn-outline-primary" type="submit">Votar</button>
                </div>
            </form>
        </div>
    </div>
    <script>
    function selectImage(id) {
        if (id == "participante1") {
            document.querySelector("#participante1").classList.add("checked");
            document.querySelector("#participante2").classList.remove("checked");
        } else {
            document.querySelector("#participante2").classList.add("checked");
            document.querySelector("#participante1").classList.remove("checked");
        }
      }
    </script>
</body>
</html>
`

module.exports = page;