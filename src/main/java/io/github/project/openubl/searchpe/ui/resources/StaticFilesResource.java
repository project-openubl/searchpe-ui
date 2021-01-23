package io.github.project.openubl.searchpe.ui.resources;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import io.quarkus.qute.api.ResourcePath;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/settings.js")
public class StaticFilesResource {

    @Inject
    @ResourcePath("settings.js")
    Template hello;

    @ConfigProperty(name = "searchpe.ui.rest-api")
    String restApi;

    @GET
    @Produces("application/javascript")
    public TemplateInstance settingsJS() {
        return hello.data("searchpeRestApi", restApi);
    }
}
