package com.DemoGuruStepDefinition;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.DemoGuruRepository.DetailspagePOM;
import com.DemoGuruRepository.HomepagePOM;
import com.DemoGuruSources.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MainClass extends Base {
	HomepagePOM p1=new HomepagePOM();
	DetailspagePOM d1=new DetailspagePOM();
	
	@Given("User in homepage and click the add customer")
	public void user_in_homepage_and_click_the_add_customer() {
		
	   launchApplication("http://demo.guru99.com/telecom/index.html");
	   Btnclick(p1.getCusBtn());
	}

	@When("User enters the details")
	public void user_enters_the_details(io.cucumber.datatable.DataTable dataTable) {
		List<String> list = dataTable.asList(String.class);
		passTheValue(d1.getfName(), list.get(0));
		passTheValue(d1.getlName(), list.get(1));
		passTheValue(d1.getEmail(), list.get(2));
		passTheValue(d1.getAddress(), list.get(3));
		passTheValue(d1.getPhone(), list.get(4));
		Btnclick(d1.getSclick());
		
	   
	}

	@Then("user should verify the Customer id")
	public void user_should_verify_the_Customer_id() {
		System.out.println("ok");
	  	}

	@Given("User should in homepage and click the add customer")
	public void user_should_in_homepage_and_click_the_add_customer() {
	    Btnclick(p1.getCusBtn());
	}


@When("User enter the details {string},{string},{string},{string},{string}")
public void user_enter_the_details(String string, String string2, String string3, String string4, String string5) {
  passTheValue(d1.getfName(), string);    
  passTheValue(d1.getlName(), string2);    
  passTheValue(d1.getfName(), string3);    
  passTheValue(d1.getfName(), string4);    
  passTheValue(d1.getfName(), string5);    
}

	@Then("user verified the Customer id")
	public void user_verified_the_Customer_id(io.cucumber.datatable.DataTable dataTable) {
	  
	}



}
