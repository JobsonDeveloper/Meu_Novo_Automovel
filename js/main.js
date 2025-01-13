$(document).ready(() => {
    $("#carrousel_img").slick({
        autoplay: true,
    });

    $(".menu_hamburguer").on("click", () => {
        $("nav").slideToggle();
    });

    $("#telefone").mask("(00) 0 0000-0000", {
        placeholder: "(81) 9 9999-9999"
    })

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo_interesse: {
                required: true
            },
        },
        messages: {
            nome: "Informe o seu nome!",
            telefone: "Informe o seu telefone!",
            email: "Informe o seu E-mail!",
            veiculo_interesse: "Informe o veículo desejado!"
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    });

    // Animação para levar o usuário até o formulario de contato
    $(".lista_veiculos button").click(function () {
        const destino = $("#contato");
        const nomeVeiculo = $(this).parent().find('h3').text();

        $("#veiculo_interesse").val(nomeVeiculo);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000);

    })
});