const AlertMessage = {
    //msgs error:
      //cognito:
        NotAuthorizedException: "E-mail ou senha incorretos.",
        UserNotFoundException: "O usuário não foi encontrado.",
        PasswordResetRequiredException:'A sua senha foi resetada. Crie uma nova em "Esqueci minha senha".',
        InvalidPasswordException: "A senha deve conter ao mínimo 8 dígitos.",
        InvalidParameterException: "Não é possível reenviar o código, pois não há e-mail registrado/verificado.",
        LimitExceededException: "Número de tentativas excedido, tente mais tarde.",
        CodeMismatchException: 'Código inválido.',
      
      //system:
        codeInvalid: "Código de confirmação inválido.",
        defaultErrorMessageCode: "Erro ao reenviar o código, tente novamente mais tarde.",
        messageDefault: "Ocorreu um erro inesperado.",
        errorRegisterConsoles: "Ocorreu um problema inesperado ao cadastrar suas plataformas.",
        tryAgain: "Ocorreu um problema inesperado. Por favor, tente novamente mais tarde.",
        insufficientStars: "Star Gold insuficiente.",
        invalidValueStars: "Informe um valor válido para ser convertido.",
        erroSendData: 'Erro ao enviar seus dados, revise os campos.',
        erroEditDataUser: 'Erro ao alterar os dados do usuário.',
        erroSignup: "Erro ao se cadastrar. Por favor, tente novamente mais tarde.",
        erroSignin: "E-mail ou senha incorretos.",        
        passwordsAreNotIdentical: "As senhas digitadas não estão idênticas.",
        errorRegister: "Ocorreu um problema inesperado ao realizar seu cadastro.",

    //msgs success:
      codeValid: "E-mail validado com sucesso!",
      sendMensage: "Mensagem enviada.",
      convertStarsSucess: "Gold Stars convertidas com sucesso!",
      newPasswordSucess: 'Senha alterada com sucesso.',
  };

export default AlertMessage;