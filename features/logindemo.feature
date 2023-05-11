Feature: Demo Web Shop Login

    Scenario Outline: As a user, I can log in

        Given I am on the login page
        When I login with <email> and <password>
        | email              | password   |
        | ottosoto@gmail.com | Samsung@10 |
        Then I should see my <email> on the Main Page
        | email              | password   |
        | ottosoto@gmail.com | Samsung@10 |

        Examples:
            | email              | password   |
            | ottosoto@gmail.com | Samsung@10 |
