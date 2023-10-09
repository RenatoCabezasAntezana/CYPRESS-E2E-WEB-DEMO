Feature: Login to the Application

    @HappyPath
    Scenario: Successful Login
        Given the user is on the login page
        When the user enters the username "standard_user"
        And the user enters the password "secret_sauce"
        And clicks the login button
        Then should see a "Swag Labs" message in content


    @UnhappyPath
    Scenario: Login Failure Due to Locked Account
        Given the user is on the login page
        When the user enters the username "locked_out_user"
        And the user enters the password "secret_sauce"
        And clicks the login button
        Then the user should see an error message "Epic sadface: Sorry, this user has been locked out." indicating the message error

    @Alternative
    Scenario: Login Failure Due to Incorrect Credentials
        Given the user is on the login page
        When the user enters the username "user"
        And the user enters the password "pass"
        And clicks the login button
        Then the user should see an error message "Epic sadface: Username and password do not match any user in this service" indicating the message error

    @HappyPath
    Scenario: Successful Login Renato
        Given the user is on the login page
        When the user enters the username "standard_user"
        And the user enters the password "secret_sauce"
        And clicks the login button
        Then should see a "Swag Labs" message in content