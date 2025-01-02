const { jsPDF } = window.jspdf;

let servicos = [];

// Adicionar serviços à lista
document.getElementById("addServico").addEventListener("click", () => {
  const servico = document.getElementById("servico").value.trim();
  const valor = parseFloat(document.getElementById("valor").value);

  if (servico && !isNaN(valor)) {
    servicos.push({ descricao: servico, valor: valor.toFixed(2) });
    atualizarListaServicos();
    document.getElementById("servico").value = "";
    document.getElementById("valor").value = "";
  } else {
    alert("Preencha os campos do serviço corretamente!");
  }
});

// Atualizar a lista de serviços
function atualizarListaServicos() {
  const lista = document.getElementById("servicos");
  lista.innerHTML = ""; // Limpar a lista existente
  servicos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.descricao} - R$ ${item.valor}`;
    lista.appendChild(li);
  });
}

// Gerar PDF
document.getElementById("gerarRecibo").addEventListener("click", () => {
  const nomeCliente = document.getElementById("nomeCliente").value.trim();
  const cpfCliente = document.getElementById("cpfCliente").value.trim();
  const enderecoCliente = document.getElementById("enderecoCliente").value.trim();
  const formaPagamento = document.getElementById("formaPagamento").value;

  if (!nomeCliente || !cpfCliente || !enderecoCliente || servicos.length === 0 || !formaPagamento) {
    alert("Preencha todos os campos obrigatórios e adicione pelo menos um serviço.");
    return;
  }

  const doc = new jsPDF();
  const total = servicos.reduce((sum, item) => sum + parseFloat(item.valor), 0).toFixed(2);

  // Caminho do logo
  const logoPath = "assets/logo_ger_rec.webp";
  const img = new Image();
  img.src = logoPath;

  img.onload = () => {
    doc.addImage(img, "PNG", 10, 10, 50, 20); // Adicionar logo ao PDF
    gerarReciboPDF(doc, nomeCliente, cpfCliente, enderecoCliente, formaPagamento, total);
  };

  img.onerror = () => {
    console.warn("Logo não encontrada, gerando recibo sem logo.");
    gerarReciboPDF(doc, nomeCliente, cpfCliente, enderecoCliente, formaPagamento, total);
  };
});

// Atualizar o preview da assinatura ao selecionar uma fonte
document.getElementById("fonteAssinatura").addEventListener("change", () => {
  const fonteSelecionada = document.getElementById("fonteAssinatura").value;
  const assinaturaPreview = document.getElementById("assinaturaPreview");
  assinaturaPreview.style.fontFamily = fonteSelecionada;
});

// Atualizar o PDF para incluir a assinatura com a fonte selecionada
function gerarReciboPDF(doc, nomeCliente, cpfCliente, enderecoCliente, formaPagamento, total) {
  const fonteAssinatura = document.getElementById("fonteAssinatura").value;

  doc.setFontSize(18);
  doc.text("RECIBO", 105, 40, { align: "center" });

  doc.setFontSize(12);
  doc.text("Emitente: Marialvo Rocha do Nascimento", 20, 60);
  doc.text("CNPJ: 12.345.678/0001-99", 20, 70);
  doc.text("Endereço: Rua Garcia Redondo, 23, Compensa, Manaus/AM", 20, 80);

  doc.text(`Recebido de: ${nomeCliente}`, 20, 100);
  doc.text(`CPF: ${cpfCliente}`, 20, 110);
  doc.text(`Endereço: ${enderecoCliente}`, 20, 120);

  let y = 140;
  servicos.forEach((item) => {
    doc.text(`${item.descricao} - R$ ${item.valor}`, 20, y);
    y += 10;
  });

  doc.text(`Valor Total: R$ ${total}`, 20, y + 10);
  doc.text(`Forma de Pagamento: ${formaPagamento}`, 20, y + 20);
  doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, y + 40);

  // Adicionar assinatura do emitente com a fonte cursiva escolhida
  doc.setFont("Dancing Script", "normal");
  doc.setFontSize(18);
  const nomeEmitente = "Marialvo Rocha do Nascimento";
  const assinaturaTexto = `Assinatura do Emitente: ${nomeEmitente} `;

  doc.text(assinaturaTexto, 20, y + 60);

  doc.save("recibo.pdf");
}
