## This is the Base layer.  This includes things like:
#    * account alias
#    * Central S3 buckets
#    * any sort of IAM Role needed for managing the infrastructure

terraform {
  required_version = ">= 0.12.12"

  backend "s3" {
    bucket = "sarithm-terraform-state"

    # be careful here
    # this key needs to be unique for each of our accounts
    key            = "cloudfront/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
