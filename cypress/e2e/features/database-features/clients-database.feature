Feature: Automatización de la base de datos

  Scenario: Successful Login
    Given the user is on the login page
    When the user enters the username "standard_user"
    And the user enters the password "secret_sauce"
    And clicks the login button
    Then should see a "Swag Labs" message in content
    
  Scenario: Insertar un registro en la base de datos
    Given  que estoy conectado a la base de datos
    When inserto un nuevo registro con los siguientes datos
    Then debería ver que el registro se ha insertado correctamente en la base de datos



