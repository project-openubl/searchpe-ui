package io.github.project.openubl.searchpe.ui;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.QuarkusApplication;
import io.quarkus.runtime.annotations.QuarkusMain;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import java.awt.*;
import java.net.URI;

@QuarkusMain
public class SearchpeMain implements QuarkusApplication {

    @ConfigProperty(name = "quarkus.http.port")
    Integer assignedPort;

    public static void main(String[] args) {
        Quarkus.run(SearchpeMain.class, args);
    }

    @Override
    public int run(String... args) throws Exception {
        URI webappUri = new URI("http://localhost:" + assignedPort + "/index.html");

        Desktop.getDesktop().browse(webappUri);
        Quarkus.waitForExit();

        return 0;
    }

}
