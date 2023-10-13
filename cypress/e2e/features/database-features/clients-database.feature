Feature: Querying all customers in the database

  Scenario: Inserción exitosa de un nuevo cliente en la base de datos
    Given I have access to the database
    When I insert a new record into the clients table with the following data
      | name  | lastname | email                   | address     | phone     |
      | Juan  | Perez    | juanPerez@amazing.com   | La Victoria | 987654321 |
      | Maria | Quispe   | mariaQuispe@amazing.com | Chorrillos  | 987654321 |
    Then check that the customer table contains the entered data

  Scenario: Successful retrieval of all customers
    Given I have access to the database
    When I run the query to display all clients
    Then I should receive a list of customers with at least one customer in the table

  Scenario: Eliminar registro
    Given I have access to the database
    When I delete a record from the table
    Then the record should be successfully deleted

  # Scenario: Successful recovery of a customer for its id
  #   Given I have access to the database
  #   When I run the query by id to show the data of a specific customer
  #   Then I should receive a list of customers with at least one customer in the table

  # Scenario: Modificar un registro existente
  #   Given I have access to the database
  #   When I update a record with ID 1 in the "clientes" table
  #   Then the record with ID 1 should be successfully updated



