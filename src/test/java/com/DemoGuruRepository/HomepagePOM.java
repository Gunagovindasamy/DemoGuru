package com.DemoGuruRepository;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.DemoGuruStepDefinition.Hook;

public class HomepagePOM {
	public HomepagePOM() {
		PageFactory.initElements(Hook.driver, this);
	}
	@FindBy (xpath="(//a[text()='Add Customer'])[1]")
		private	WebElement cusBtn;

	public WebElement getCusBtn() {
		return cusBtn;
	}

}
