<p align="center">
  <img 
src="https://user-images.githubusercontent.com/70600553/146774102-d84dbc51-7c3c-46af-af70-5f8e2ca21a22.png"
width=250
/>
</p>

<h1 align='center'>Saúde em Mãos</h1>

<br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/70600553/146772819-109af1a4-503a-41f3-a554-bd1e361a0c27.gif"/>
  <img src="https://user-images.githubusercontent.com/70600553/146772758-8070a8c7-f44d-440e-b5db-9e8a1907f275.gif"/>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/70600553/146772743-80d26824-3434-462c-9a8e-11f80b20cb7f.gif"/>
  <img src="https://user-images.githubusercontent.com/70600553/146772828-93146dd3-010f-4119-a0d2-93607462cf45.gif"/>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/70600553/146774812-9e28734d-46c2-41db-bacd-0f01850f38b1.jpg" width=200/>
  <img src="https://user-images.githubusercontent.com/70600553/146774815-b7e7f94f-8c24-441d-846b-95411292a60b.jpg" width=200/>
<img src="https://user-images.githubusercontent.com/70600553/146774824-ad9f0fd2-68eb-4b14-8829-7cfc787a0cf7.jpg" width=200/>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/70600553/146774821-2290ed2c-ec1b-4045-8ff2-bbcc51e62ab4.jpg" width=200/>
  <img src="https://user-images.githubusercontent.com/70600553/146774823-f23dc134-5673-4a44-be7a-87a73bd0e63b.jpg" width=200/>
<img src="https://user-images.githubusercontent.com/70600553/146774819-571f306b-4aec-49a3-9eff-e0c84c1ea43c.jpg"  width=200/>
</p> 

# 📕 Sobre o Projeto 

#### Esse projeto foi criado para o TCC da Etec de Taboão da Serra no curso de Análise e Desenvolvimento de Sistemas Integrado ao Ensino Médio.
#### O aplicativo Saúde em Mãos foi feito para auxíliar as pessoas que cuidam de idosos e os próprios idosos no gerenciamento de medicamentos, consultas, primeiros-socorros, números de emergência e hospitais/clíncias próximas. Tem-se como funcionalidades:  
 - Notificar os medicamentos a serem tomados no dia;
 - Mostrar um painel semanal dos medicamentos que precisam ser tomados;
 - Cadastrar um medicamento em datas específicas ou em dias únicos;
 - Mostrar um tutorial (vídeo ou texto) rápido e prático de primeiro-socorros em acidentes que mais ocorrem com idosos;
 - Ligar para a emergência (polícia, bombeiro ou ambulância) com menos de dois cliques;
 - Lembrete de consultas em hospitais ou clínicas com informações de horário, data, nome, especialidade e número de contato;
 - Marcar consultas como concluidas ou não concluidas;
 - Tutoriais para o uso da plataforma dentro da aplicação.

# Tecnologias usadas
 - React Native
 - Typescript 
 - Expo


# 💻 Como instalar?
Para utilizar o aplicativo, é necessário antes instalar o BackEnd. https://github.com/KaiqueCampos/ApiAdonisTCC.git

### IMPORTANTE: Para rodar a aplicação via Expo, é necessário que ambos dispositivos estejam conectados na mesma rede. Além disso é necessário:
#### No Backend
- Atribuir a varível HOST dentro do .ENV do backend o endereço IP da rede.

#### Na aplicação mobile
- Dentro da pasta Services, no arquivo api.ts mude o endereço IP da variável 'baseURL' para o mesmo do backend.

##### Instalando o Backend

```
# Instale o AdonisJS
$ npm i --global @adonisjs/cli

# Clone o backend
$ git clone https://github.com/KaiqueCampos/ApiAdonisTCC.git

# Instale as dependencias
$ yarn install
# ou
$ npm install

# Certifique-se de configurar o .ENV da mesma maneira do .ENV.example
# É preciso do MySql instalado e de um banco de dados criado (as informações desse banco de dados precisam estar no .ENV)

# Criar as tabelas dentro do banco de dados
$ adonis migration:run

# Rodar o servidor
$ adonis serve --dev
```

##### Instalando a aplicação mobile
```
# Tenha o Expo instalado
$ npm i --global expo-cli

# Clone o repositório
$ git clone https://github.com/KaiqueFj/APP--Help_Seniors.git

# Entre no repositório
$ cd APP--Help_Seniors

# Instale as dependêcias

$ yarn install
# ou
$ npm install

# Rode a aplicação
$ expo start
```






