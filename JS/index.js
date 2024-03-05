// Adicione eventos de clique aos ícones
document.getElementById("homeIcon").addEventListener("click", function () {
    alert("Você já está na pagina inicial");
  });

document.getElementById("historicoIcon").addEventListener("click", function () {
    alert("Clicou em Histórico");
});

document.getElementById("relatorioIcon").addEventListener("click", function () {
    alert("Clicou em Relatório");
});

document.getElementById("perfilIcon").addEventListener("click", function () {
    alert("Clicou em Perfil");
});

document.getElementById("expandButton").addEventListener("click", function() {
    var expandedContent = document.getElementById("expandedContent");
    if (expandedContent.style.display === "none") {
      expandedContent.style.display = "block";
    } else {
      expandedContent.style.display = "none";
    }
  });
  
