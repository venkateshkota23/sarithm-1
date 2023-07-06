node {
      def app
      stage('Clone repository') {
            checkout scm
      }
      stage('Build') {
            sh "./npm-build.sh"
      }
      stage('Deploy to Dev') {
            if ("${BRANCH_NAME}" == "main") {
                  sh "aws s3 cp build/. s3://dev-ats-webhost-sarithm/ --recursive"
            }
      }
      stage('Deploy to stage') {
            if ("${BRANCH_NAME}" == "release") {
                  sh "aws s3 cp build/. s3://ats-webhost-sarithm/ --recursive --profile=stg"
            }
      }
}
