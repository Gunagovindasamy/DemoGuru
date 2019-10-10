package com.DemoGuruStepDefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Feature\\demoguru.feature", glue = "com.DemoGuruStepDefinition", 
														dryRun = false, plugin = {"html:target"})

public class TestRunnerClass {

}
