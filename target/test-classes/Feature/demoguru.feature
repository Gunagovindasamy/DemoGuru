@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @smoke
  Scenario: DemoGurupage
    Given User in homepage and click the add customer
    When User enters the details
      | Gunasekaran | Govindasamy | gunaanjali03@gmailcom | Krishnagiri | 9159491573 |
    Then user should verify the Customer id

  @sanity
  Scenario: 
    Given User should in homepage and click the add customer
    When User enter the details "<fname>","<lname>","<email>","<address>","<phone>"
    Then user verified the Customer id
      | fname       | lname       | email                 | address     | phone      |
      | Gunasekaran | Govindasamy | gunaanjali03@gmailcom | Krishnagiri | 9159491573 |
      | Gokulnath   | Mahendiran  | gokulnath03@gmailcom  | Dharmapuri  | 9159491572 |
