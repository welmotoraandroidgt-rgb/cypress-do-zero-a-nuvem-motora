function preencherCampo(seletor, texto) {
  cy.get(seletor).should('be.visible').type(texto , {delay:0}).should('have.value', texto)
}

function clicaremcampos(seletor ) {
  cy.get(seletor).should('be.visible').click()
}

function clicaremcampostiporadio(seletor, tipovalue) {
  cy.get(seletor + tipovalue).should('be.visible').check().should('be.checked')
}
function clicaremcamposcontendoelemntos(seletor , contem) {
  cy.contains(seletor , contem).should('be.visible').click()
}

function validarmensagem(seletor) {
  cy.get(seletor).should('be.visible')
  }

function limpandocampos(seletor) {
  cy.get(seletor).should('be.visible').clear().should('have.value' , "")
}

function clicandoemcamploscomotiposelect (seletor , pelemento , pelemetovalue) {
  cy.get(seletor).select(pelemento).should('be.visible').should('have.value' , pelemetovalue)
}

function clicaremcamposticheckboxedesmarcandooultimo(seletor) {
  cy.get(seletor).should('be.visible').check().should('be.checked').last().uncheck().should('not.be.checked')
}

function fazendouploaddearquivos(seletor, caminhoarquivo ,arquivo ) {
  cy.get(seletor)
    .selectFile(caminhoarquivo , {action:'drag-drop'})
    .should(input =>{
      expect(input[0].files[0].name).to.equal(arquivo)
  })
  
}

function fazendouploaddearquivosdragdrop(seletor, caminhoarquivo ,arquivo ) {
  cy.get(seletor)
    .selectFile(caminhoarquivo)
    .should(input =>{
      expect(input[0].files[0].name).to.equal(arquivo)
  })
  
}


function fazendouploaddearquivosusandofeacture(seletor ,arquivo ) {
  cy.fixture(arquivo).as('SimpleFile')
  cy.get(seletor)
    .selectFile('@SimpleFile')
    .should(input =>{
      expect(input[0].files[0].name).to.equal(arquivo)
  })
  
}

function verificanovaabasemnececcidadedeclick(elementohtml, textocontidonohtml  ) {
  cy.contains(elementohtml , textocontidonohtml)
  .should('have.attr' ,  'href' , 'privacy.html')
  .and('have.attr' , 'target', '_blank')
}

function verificandonovaabasclicandonolink(elementohtml, textocontidonohtml , elementohtml1 , textocontidonohtml1 ) {
  cy.contains(elementohtml , textocontidonohtml)
  .invoke('removeAttr' , 'target')
  .click()
  cy.contains(elementohtml1 , textocontidonohtml1).should('be.visible')
}



const html_nome= '#firstName'
const html_sobrenome = '#lastName'
const html_email = '#email'
const html_textoarea = '#open-text-area'
const html_buton = 'button'
const html_id = "id" 
const html_tag_a = "a"
const html_tag_h1 = "h1"



const html_contem_texto_enviar = "Enviar"
const html_contem_texto_telefone = "#phone-checkbox"
const html_sucesso = '.success'  
const html_error = '.error'  
const html_telefone = '#phone'
const html_selecao_produto = "#product"
const html_opcaoselecao_value_youtube = "youtube"
const html_opcaoselecao_value_mentoria = "mentoria"
const html_opcaoselecao_value_blog = "blog"
const html_radio = 'input[type="radio"]'
const html_opcaoselecao_value_ajuda = '[value="ajuda"]'
const html_opcaoselecao_value_feedback = '[value="feedback"]'
const html_selecionartodos_checkbox = 'input[type="checkbox"]'
const html_file = '#-upload'



const nome = "Wellington"
const sobrenome = "araujo"
const email = "wellington@hotmail.com"
const telefone = "62992368986"
const areadetexto = "Obrigado!"
const emailisvalido = "invaido"
const opcaodeselecao_youtube  = "YouTube"
const opcaodeselecao_mentoria  = "mentoria"
const arquivoparaupload = 'cypress/fixtures/example.json'
const arquivojson ='example.json' 
const politicadeprivacidade = "Política de Privacidade"
const cattatpoliticadeprivacidade = "CAC TAT - Política de Privacidade"




describe('Central de Atendimento ao Cliente TAT', () => {
   beforeEach( () => {    
   cy.visit('./src/index.html')
  })
  
  it('verificando título da aplicação', () => {    
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Envio de formulario ', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30)
    preencherCampo(html_nome,nome ) 
    preencherCampo(html_sobrenome,sobrenome )  
    preencherCampo(html_email,email )  
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_sucesso)  

  })


  it('verifica mensagem de erro ', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30)
    preencherCampo(html_nome,nome ) 
    preencherCampo(html_sobrenome,sobrenome )  
    preencherCampo(html_email,emailisvalido )  
    preencherCampo(html_textoarea, textoRepetido)
   clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_error)      
    limpandocampos(html_nome)
    limpandocampos(html_sobrenome)
    limpandocampos(html_email)
    limpandocampos(html_textoarea)

  })

  it('validando numero de telefone ', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30)
    preencherCampo(html_nome,nome ) 
    preencherCampo(html_sobrenome,sobrenome )  
    preencherCampo(html_email,email )  
    preencherCampo(html_telefone,telefone )
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcampos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_sucesso)  
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório ', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30)
    preencherCampo(html_nome,nome ) 
    preencherCampo(html_sobrenome,sobrenome )  
    preencherCampo(html_email,email ) 
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcampos (html_contem_texto_telefone)
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_error)    
    limpandocampos(html_nome)
    limpandocampos(html_sobrenome)
    limpandocampos(html_email)
    limpandocampos(html_textoarea)  
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios ', () => {   
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_error)    
  })
 
  it('seleciona um produto YouTube por seu texto ', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30) 
    preencherCampo(html_nome,nome) 
    preencherCampo(html_sobrenome,sobrenome)  
    clicandoemcamploscomotiposelect(html_selecao_produto,opcaodeselecao_youtube ,html_opcaoselecao_value_youtube)
    preencherCampo(html_email,email ) 
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_sucesso)   
  })
 
  it('seleciona um produto Mentoria por seu valor value ', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30) 
    preencherCampo(html_nome,nome) 
    preencherCampo(html_sobrenome,sobrenome)  
    clicandoemcamploscomotiposelect(html_selecao_produto,opcaodeselecao_mentoria ,html_opcaoselecao_value_mentoria)
    preencherCampo(html_email,email ) 
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_sucesso)   
  })

  it('seleciona um produto Blog por seu índice', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30) 
    preencherCampo(html_nome,nome) 
    preencherCampo(html_sobrenome,sobrenome)  
    clicandoemcamploscomotiposelect(html_selecao_produto,1 ,html_opcaoselecao_value_blog)
    preencherCampo(html_email,email ) 
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    validarmensagem(html_sucesso)   
  })

  it('marca o tipo de atendimento ajuda', () => {  
    const textoRepetido = Cypress._.repeat(areadetexto, 30) 
    preencherCampo(html_nome,nome) 
    preencherCampo(html_sobrenome,sobrenome)   
    preencherCampo(html_email,email ) 
    preencherCampo(html_textoarea, textoRepetido)
    clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
    clicaremcampostiporadio(html_radio, html_opcaoselecao_value_ajuda)
    validarmensagem(html_sucesso)   
  })
   

  
 it('marcar ambos ckeckbox , depois desmarcar somente o ultimo' , ()=>{
  const textoRepetido = Cypress._.repeat(areadetexto, 30) 
  preencherCampo(html_nome,nome) 
  preencherCampo(html_sobrenome,sobrenome)   
  preencherCampo(html_email,email )
  preencherCampo(html_telefone , telefone) 
  clicandoemcamploscomotiposelect(html_selecao_produto,opcaodeselecao_youtube ,html_opcaoselecao_value_youtube)
  clicaremcampostiporadio(html_radio, html_opcaoselecao_value_feedback)
  clicaremcamposticheckboxedesmarcandooultimo(html_selecionartodos_checkbox)
  preencherCampo(html_textoarea, textoRepetido)
  clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
  validarmensagem(html_sucesso)   
 })

 it('fazendo upload com Cypress' , ()=>{
  const textoRepetido = Cypress._.repeat(areadetexto, 30) 
  preencherCampo(html_nome,nome) 
  preencherCampo(html_sobrenome,sobrenome)   
  preencherCampo(html_email,email )
  preencherCampo(html_telefone , telefone) 
  clicandoemcamploscomotiposelect(html_selecao_produto,opcaodeselecao_youtube ,html_opcaoselecao_value_youtube)
  clicaremcampostiporadio(html_radio, html_opcaoselecao_value_feedback)
  clicaremcamposticheckboxedesmarcandooultimo(html_selecionartodos_checkbox)
  preencherCampo(html_textoarea, textoRepetido)
  fazendouploaddearquivos(html_file , arquivoparaupload , arquivojson )
  clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
  validarmensagem(html_sucesso)   
 })
  
  it('simulando um arquivo similando um drag-and-drop' , ()=>{
  const textoRepetido = Cypress._.repeat(areadetexto, 30) 
  preencherCampo(html_nome,nome) 
  preencherCampo(html_sobrenome,sobrenome)   
  preencherCampo(html_email,email )
  preencherCampo(html_telefone , telefone) 
  clicandoemcamploscomotiposelect(html_selecao_produto,opcaodeselecao_youtube ,html_opcaoselecao_value_youtube)
  clicaremcampostiporadio(html_radio, html_opcaoselecao_value_feedback)
  clicaremcamposticheckboxedesmarcandooultimo(html_selecionartodos_checkbox)
  preencherCampo(html_textoarea, textoRepetido)
  fazendouploaddearquivosdragdrop(html_file , arquivoparaupload , arquivojson )
  clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
  validarmensagem(html_sucesso)   
 })

 it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias' , ()=>{
  const textoRepetido = Cypress._.repeat(areadetexto, 30) 
  preencherCampo(html_nome,nome) 
  preencherCampo(html_sobrenome,sobrenome)   
  preencherCampo(html_email,email )
  preencherCampo(html_telefone , telefone) 
  clicandoemcamploscomotiposelect(html_selecao_produto,opcaodeselecao_youtube ,html_opcaoselecao_value_youtube)
  clicaremcampostiporadio(html_radio, html_opcaoselecao_value_feedback)
  clicaremcamposticheckboxedesmarcandooultimo(html_selecionartodos_checkbox)
  preencherCampo(html_textoarea, textoRepetido)
  fazendouploaddearquivosusandofeacture(html_file , arquivojson )
  clicaremcamposcontendoelemntos(html_buton , html_contem_texto_enviar);
  validarmensagem(html_sucesso)   
 })

 it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique' , ()=>{
  verificanovaabasemnececcidadedeclick(html_tag_a , politicadeprivacidade)
 })
 
it('cessa a página da política de privacidade removendo o target e então clicando no link',()=>{
  verificandonovaabasclicandonolink(html_tag_a , politicadeprivacidade , html_tag_h1 , cattatpoliticadeprivacidade)
 })

})




