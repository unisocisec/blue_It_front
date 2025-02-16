## IBLUEIT 🐬
Este repositório trata-se de um fork/estudo do projeto **[UDESC-LARVA/IBLUEIT](https://github.com/UDESC-LARVA/IBLUEIT)** no propósito de TCC na Universidade UniSociesc tendo como objetivo a sugestão de melhoria da aplicação.

#### Integrantes
- [@alexandrebfaust](https://github.com/alexandrebfaust) 
- [@kalitasilva](https://github.com/kalitasilva) 
- [@Leandro-Custodio](https://github.com/Leandro-Custodio) 
- [@Lucas-Besen](https://github.com/Lucas-Besen) 
- [@welingtonlarsen](https://github.com/welingtonlarsen) 

## Sobre
Este Repositório trata-se da aplicação *WEB/FrontEnd* foi desenvolvida baseando-se na arquitetura SPA (Single-Page Application) utilizando algumas bibliotecas auxiliares.

## Tecnologias e Bibliotecas Utilizadas:
- React v...

## Instalação e Inicialização SEM Docker-Compose
*Atenção Inicialize o [Blue_It_BackEnd](https://github.com/unisocisec/Blue_It_BackEnd) e [Blue_It_IA](https://github.com/unisocisec/Blue_It_IA) primeiro!*
1. Baixe o nvm [Windows](https://github.com/coreybutler/nvm-windows/releases) OU [linux](https://github.com/nvm-sh/nvm)
2. Baixe a Versão dp Node <strong>16.15.0</strong> com:
```
nvm install 16.15.0
```
3. Rode o comando para instalar as dependencias:
```
npm install
```
4. Crie um arquivo chamado _config.js em [Blue_It_FrontEnd\src\providers](https://github.com/unisocisec/Blue_It_FrontEnd/tree/master/src/providers) com a seguintes informações:
```javascript
export const  BaseUrl = "http://localhost:7071/api";
```
5. Rode o Script de Start:
```
npm start
```
6. Pronto, o Blue_It_FrontEnd estará ativo. Para acessá-lo utilize a rota http://localhost:3000

Avisto: Verifique se o arquivo [.htaccess](https://github.com/unisocisec/Blue_It_FrontEnd/blob/master/build/.htaccess) está no diretório raiz do seu servidor web!

### Repositórios GitHub - Código fonte
- Aplicação (BackEnd) [Blue_It_BackEnd](https://github.com/unisocisec/Blue_It_BackEnd)
- Interface gráfica (FrontEnd) [Blue_It_FrontEnd](https://github.com/unisocisec/blue_It_front)
- Inteligência artificial [Blue_It_IA](https://github.com/unisocisec/Blue_It_IA)
- Repositório do Jogo [Blue_It_Game](https://github.com/unisocisec/Blue_It_Game)
