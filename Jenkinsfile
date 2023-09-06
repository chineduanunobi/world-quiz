pipeline {

  environment {
    dockerimagename = "mecat/country-iq"
    dockerImage = ""
    DOCKERHUB_CREDENTIALS = credentials('dockerCred')
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
         echo 'Checking out && pulling....'
         git branch: 'main', credentialsId: 'githubCred', url: 'https://github.com/chineduanunobi/world-quiz.git'
      }
    }

    stage('Build image') {
      steps{
        sh 'docker build -t ${dockerimagename}:v.${BUILD_NUMBER} .'
      }
    }

    stage('Login to DockerHub'){
        steps{
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        }
    }

    stage('Pushing Image') {
      steps{
        sh 'docker push ${dockerimagename}:v.${BUILD_NUMBER}'
      }
    }

    stage('Deploying Country-quiz container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: 'country-iq-deployment.yaml', 'country-iq-service.yaml' kubeconfigId: 'k8config')
        }
      }
    }

     stage('Cleaning up') {
        steps{
            sh "docker rmi ${dockerimagename}:v.${BUILD_NUMBER}"
        }
       }
  }
}
