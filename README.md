# 🚀 loginPageExample
![img](/images/publicidade.png)
## 📌 Introdução

Este projeto é uma página de login simples, desenvolvida como um exemplo de código para quem está aprendendo Next.js e Tailwind CSS. O objetivo é fornecer um modelo funcional e bem estruturado para servir como ponto de partida ou referência em projetos futuros. Este projeto foi feito para desenvolvedores iniciantes e intermediários que desejam aprender ou aprimorar suas habilidades em desenvolvimento web com Next.js e Tailwind CSS, resolvendo a necessidade de ter um exemplo prático e bem documentado de uma página de login.

## ✅ Recursos e funcionalidades

*   **Formulário de Login:** Permite que o usuário insira seu nome de usuário (email) e senha.
*   **Validação de Campos:** Verifica se os campos de nome de usuário e senha estão preenchidos antes de prosseguir.
*   **Feedback de Erro:** Exibe mensagens de erro claras caso os campos obrigatórios não sejam preenchidos.
*   **Layout Responsivo:** A página se adapta a diferentes tamanhos de tela, proporcionando uma experiência de uso adequada em dispositivos móveis, tablets e desktops.
*   **Design Atraente:** Utiliza o Tailwind CSS para um design moderno e fácil de personalizar.
*   **Integração com Next.js:** Implementado com a estrutura do Next.js, permitindo funcionalidades como roteamento e renderização do lado do servidor (SSR).

## 🛠️ Tecnologias utilizadas

*   **⚛️ Next.js:** Um framework React para construir aplicações web com renderização do lado do servidor e outras funcionalidades avançadas. Foi escolhido para oferecer uma experiência de desenvolvimento mais eficiente e um melhor desempenho para a aplicação.
*   **🎨 Tailwind CSS:** Uma biblioteca de utilitários CSS para estilização rápida e consistente. Foi selecionado por sua praticidade e facilidade de personalização, permitindo a criação de interfaces responsivas e modernas.
*   **📝 HTML:** Linguagem de marcação utilizada para estruturar o conteúdo da página. Essencial para definir a semântica e a hierarquia dos elementos visuais.
*   **✨ CSS:** Utilizado em conjunto com o Tailwind CSS para complementar o design e a estilização da aplicação.

## ⚙️ Pré-requisitos e instalação

Antes de começar, certifique-se de ter instalado em sua máquina:

*   **Node.js:** É necessário ter o Node.js (versão 18 ou superior) instalado. Você pode baixá-lo no site oficial: [https://nodejs.org/](https://nodejs.org/)
*   **npm ou Yarn:** Gerenciador de pacotes. Geralmente vem com o Node.js (npm) ou pode ser instalado separadamente (Yarn): [https://yarnpkg.com/](https://yarnpkg.com/).

**Passos para instalar e executar o projeto:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/marco0antonio0/loginPageExample.git
    cd loginPageExample
    ```
2.  **Instale as dependências:**
    ```bash
    npm install # ou yarn install
    ```
3.  **Execute o projeto:**
    ```bash
    npm run dev # ou yarn dev
    ```
    A aplicação estará disponível em `http://localhost:3000`.

## 💡 Como usar

1.  Abra o projeto no seu navegador acessando `http://localhost:3000`.
2.  Você verá o formulário de login na tela.
3.  Preencha os campos de nome de usuário (email) e senha.
4.  Se um campo estiver vazio, uma mensagem de erro será exibida.
5.  Clique no botão "Sign In" para enviar o formulário.
6.  Os dados preenchidos serão exibidos no console do navegador (para fins de demonstração).
7.  Observe que a parte de autenticação (envio e validação para um backend) não está implementada neste exemplo, sendo necessário a sua implementação.

## 💻 Exemplos de código

**Exemplo de código do formulário de login:**

```jsx
  <div className="flex flex-col h-[100%] w-[100%] px-20 lg:px-10">
    <h1 className="m-auto mb-1 ml-0 opacity-65 sm:text-sm">EMAIL ADRESS</h1>
    <input type="email" className={`m-auto mt-0 mb-0 w-[100%] h-14 rounded-lg ${errors.name?"border-red-500":"border-gray-200"} border-2 px-5 sm:h-12`} placeholder="user@email.com" onChange={(e)=>changeCredentials('name',e)}/>
    {errors.name && <span className="text-red-500 text-sm mt-1">Email is required</span>}

    <div className="h-5"></div>
    <h1 className="m-auto mt-0 mb-1 ml-0 opacity-65 sm:text-sm">PASSWORD</h1>
    <input type="password" className={`m-auto mt-0 mb-0 w-[100%] h-14 rounded-lg ${errors.password?"border-red-500":"border-gray-200"}  border-2 px-5 sm:h-12`} placeholder="" onChange={(e)=>changeCredentials('password',e)}/>
    {errors.password && <span className="text-red-500 text-sm mt-1">Password is required</span>}
    <div className="h-5"></div>
    <button className="align-middle items-center w-[100%] h-14 border-2 border-gray-200 rounded-md mt-0" onClick={()=>onClickButton()}>
      Sign in
    </button>
    <div className="h-1"></div>
    <span className="m-auto"></span>
  </div>
```

**Exemplo da função que valida os campos:**

```jsx
  function checkFildsIsEmpty(){
    let newErrors = {
      name: credentials.name.trim() === "",
      password: credentials.password.trim() === "",
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.password) {
      console.log(credentials);
    }
  }

  function onClickButton() {
    checkFildsIsEmpty()
    // ==============================
    // ******************************
    // Adicione aqui sua autenticacao
    // ******************************
    const {name,password} = credentials
    //
  }
```

## 🗂️ Estrutura de diretórios

```
📦 projeto-nextjs
 ┣ 📂 .next              # Arquivos de build gerados pelo Next.js
 ┣ 📂 node_modules       # Dependências do projeto
 ┣ 📂 pages              # Páginas do projeto
 ┃ ┣ 📂 fonts           # Fontes locais
 ┃ ┣ 📜 _app.tsx        # Componente principal
 ┃ ┣ 📜 _document.tsx   # Documento HTML base
 ┃ ┗ 📜 index.tsx       # Página login Page example
 ┣ 📂 public             # Arquivos públicos
 ┃ ┗ 📜 favicon.ico     # Ícone do site
 ┣ 📂 styles             # Arquivos de estilos
 ┃ ┗ 📜 globals.css     # Estilos globais
 ┣ 📜 .gitignore         # Arquivo de configuração do Git
 ┣ 📜 next-env.d.ts      # Definições de tipo para Next.js
 ┣ 📜 next.config.mjs    # Configuração do Next.js
 ┣ 📜 package.json       # Dependências do projeto
 ┣ 📜 package-lock.json  # Controle de versões das dependências
 ┣ 📜 postcss.config.mjs # Configuração do PostCSS
 ┣ 📜 README.md          # Documentação do projeto
 ┣ 📜 tailwind.config.ts # Configuração do Tailwind CSS
 ┗ 📜 tsconfig.json      # Configuração do TypeScript
```

## 🤝 Contribuição

Sinta-se à vontade para contribuir com este projeto! Se você encontrar algum problema ou tiver alguma sugestão, siga estes passos:

1.  Faça um fork do repositório.
2.  Crie uma branch com a sua alteração: `git checkout -b feature/sua-alteracao`.
3.  Faça as alterações e commite: `git commit -m "Adiciona: sua alteração"`.
4.  Faça o push para sua branch: `git push origin feature/sua-alteracao`.
5.  Abra um pull request para que suas alterações sejam avaliadas.

