package org.afc.ui;

import org.afc.env.Environment;
import org.afc.util.ClasspathUtil;

public class WebServerLocal {

	public static void main(String[] args) throws Exception {
		ClasspathUtil.addSystemClasspath("target/config");
		ClasspathUtil.addSystemClasspath("target/javascript");
		Environment.set("web", "local", "rn", "default", "in1");
		WebServer.main(new String[] { "--spring.profiles.active=local,hk,default,hk1" });
	}
}