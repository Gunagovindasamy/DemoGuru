package com.DemoGuruSources;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.DemoGuruStepDefinition.Hook;


public class Base {
	public static void launchApplication(String url) {
		Hook.driver.get(url);
	//driver.get("http://demo.guru99.com/telecom/index.html");
	}
	
public static void passTheValue(WebElement e, String value) {
	e.sendKeys(value);
	}
public static void Btnclick(WebElement e) {
	e.click();
	
}
}
