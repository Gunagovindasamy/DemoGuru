package com.DemoGuruStepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;
	@Before
	public void before() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Welcome\\Downloads\\eclipse-java-oxygen-3a-win32\\eclipse\\GunaTestNG Project\\DemoGuruTestSite\\src\\test\\resources\\dri\\chromedriver.exe");
		driver=new ChromeDriver();
	}
	@After
	public void after() {
		driver.close();
	}
}
