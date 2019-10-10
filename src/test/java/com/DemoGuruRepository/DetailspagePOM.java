package com.DemoGuruRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.DemoGuruStepDefinition.Hook;

public class DetailspagePOM {
	public DetailspagePOM() {
		PageFactory.initElements(Hook.driver, this);
	}
	@FindBy(xpath="//label[text()='Done']")
	 private WebElement bgClk;
	
	@FindBy(id="fname")
	private WebElement fName;
	
	@FindBy(id="lname")
	private WebElement lName;
	
	@FindBy(id="email")
	private WebElement Email;
	
	@FindBy(id="message")
	 private WebElement address;
	
	@FindBy(id="telephoneno")
	 private WebElement phone;
	
	@FindBy(name="submit")
	 private WebElement sclick;

	public WebElement getBgClk() {
		return bgClk;
	}

	public WebElement getfName() {
		return fName;
	}

	public WebElement getlName() {
		return lName;
	}

	public WebElement getEmail() {
		return Email;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getPhone() {
		return phone;
	}

	public WebElement getSclick() {
		return sclick;
	}
	
}
