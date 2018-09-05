var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

    $(document).ready(function() {
        $("#resumen").remove();
    
        $("#target1").parent().css("background-color","red");
        $(".target:even").css("background","gray");//aplica la funcion a los objetos impares de la clase 'target'
        $(".well:odd").css("background", "purple");//aplica la funcion a los objetos pares de la clase 'well'
    });