provider "heroku" {
  version = "~> 1.9"
}

variable "example_app_name" {
  description = "Name of the Heroku app provisioned as an example"
}

resource "heroku_app" "example" {
  name = "${var.example_app_name}"
  region = "us"
}

# Build code & release to the app
resource "heroku_build" "example" {
  app = "${heroku_app.example.name}"

  source = {
    url = "https://github.com/MohitTilwani15/voting-system/tarball/master"
  }
}

output "example_app_url" {
  value = "https://${heroku_app.example.name}.herokuapp.com"
}
