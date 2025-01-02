# Gerador de Recibos - Estúdio Marialvo Produções

![image](https://github.com/user-attachments/assets/f281b22d-7ef0-43ae-a3a0-9ba892eb46c5)


https://dvalenascimento.github.io/geradorDeRecibos_mProducoes/

## Descrição do Projeto
O **Gerador de Recibos** é um sistema desenvolvido para o **Estúdio Marialvo Produções** com o objetivo de automatizar a criação de recibos personalizados em formato PDF. O sistema é responsivo, intuitivo e permite a inserção de múltiplos serviços, facilitando o controle financeiro e a emissão de documentos.

## Funcionalidades
- Cadastro de dados do cliente (nome, CPF e endereço);
- Adição de múltiplos serviços com descrição e valor;
- Geração de recibos em PDF com layout profissional;
- Inclusão de logotipo no recibo (se disponível);
- Cálculo automático do valor total dos serviços;
- Registro da forma de pagamento;
- Assinaturas do emitente e do cliente no recibo gerado.

## Estrutura do Projeto
```
Gerador-de-Recibos/
├── index.html         # Estrutura principal da interface
├── css/
│   └── styles.css     # Estilização da aplicação
├── js/
│   └── script.js      # Lógica de interação e geração de PDF
├── assets/
│   └── logo.png       # Logotipo utilizado no recibo
└── README.md          # Documentação do projeto
```

## Tecnologias Utilizadas
- **HTML5**: Para estruturação da interface;
- **CSS3**: Para estilização responsiva e moderna;
- **JavaScript**: Para interatividade e geração dinâmica do PDF;
- **jsPDF**: Biblioteca JavaScript utilizada para criar arquivos PDF diretamente no navegador.

## Como Utilizar
1. Clone este repositório em sua máquina local:
   ```bash
   git clone https://github.com/seuusuario/Gerador-de-Recibos.git
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Preencha os campos obrigatórios com as informações do cliente e serviços.
4. Clique em **Adicionar Serviço** para incluir mais itens na lista.
5. Clique em **Gerar Recibo PDF** para criar o documento.
6. O recibo será baixado automaticamente.

## Padrões e Convenções
- **Estrutura de Código**: Segue boas práticas de organização e identação;
- **Controle de Versão**: Repositório gerenciado no GitHub.

## Melhorias Futuras
- Integração com banco de dados para armazenar recibos emitidos;
- Personalização de cores e fontes no PDF;
- Opção de envio do recibo por e-mail diretamente pelo sistema.

## Autor
**Diego Nascimento**  
Músico, professor e desenvolvedor Front-End em ascensão. Para contato, envie um e-mail para: [seuemail@exemplo.com](mailto:seuemail@exemplo.com).

## Licença
Este projeto é de uso exclusivo do **Estúdio Marialvo Produções**. Todos os direitos reservados.
