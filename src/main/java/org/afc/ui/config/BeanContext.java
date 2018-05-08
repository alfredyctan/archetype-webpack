package org.afc.ui.config;

import org.afc.spring.web.SPAIndexController;
import org.afc.spring.web.UIConfigWebMvcAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanContext {

	@Bean
	public SPAIndexController spaIndexController() {
		return new SPAIndexController();
	}
	
	@Bean
	public UIConfigWebMvcAdapter configWebMvcAdapter() {
		return new UIConfigWebMvcAdapter();
	}
}
