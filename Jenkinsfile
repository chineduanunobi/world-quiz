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
        sh 'docker build -t ${env.dockerimagename}:v.${BUILD_NUMBER} .'
      }
    }

    stage('Login to DockerHub'){
        steps{
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        }
    }

    stage('Pushing Image') {
      steps{
        sh 'docker push ${env.dockerimagename}:v.${BUILD_NUMBER}'
//           docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
//             dockerImage.push("latest")
//           }
      }
    }

    stage('Deploying Country-quiz container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", "service.yaml")
        }
      }
    }

     stage('Cleaning up') {
        steps{
            sh "docker rmi ${env.dockerimagename}:v.${BUILD_NUMBER}"
        }
       }

  }

}
// pipeline {
//     agent any
//
//     stages {
//         stage('Cloning deployments') {
//             steps {
//               echo 'Cloning && pulling....'
//               checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
//             }
//         }
//
//         stage('Build') {
//             steps {
//                 script {
//                   sh 'docker build --no-cache . -t iqworld-image:v.${BUILD_NUMBER}'
//                 }
//             }
//         }
//         stage('Publish') {
//             steps {
//                 echo 'Publishing....'
//                 script {
//                     sh "docker tag iqworld-image:v.${BUILD_NUMBER} iqworld-image:v.${BUILD_NUMBER}"
//                     sh "docker push iqworld-image:v.${BUILD_NUMBER}"
//                 }
//             }
//         }
//         stage('Deployment') {
//             steps {
//                echo 'Deploying....'
//                script {
//                     sh 'kubectl delete -f country-iq-deployment.yaml'
//                     sh 'kubectl delete -f country-iq-service.yaml'
//                     sh 'kubectl apply -f country-iq-deployment.yaml'
//                     sh 'kubectl apply -f country-iq-service.yaml'
//                }
//             }
//         }
//     }
//     post {
//         always {
//             echo 'Portal image is deployed in to Kubernetes '
//         }
//         success {
//             echo 'Successfully!'
//         }
//         failure {
//             echo 'Failed!'
//         }
//         unstable {
//             echo 'This will run only if the run was marked as unstable'
//         }
//         changed {
//             echo 'This will run only if the state of the Pipeline has changed'
//             echo 'For example, if the Pipeline was previously failing but is now successful'
//         }
//     }
// }
//
//
// // pipeline {
// //     agent any
// //
// //     stages {
// //     stage('Clone repository') {
// //       steps {
// //           echo "Cloning the repository..."
// //           checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
// //           }
// //       }
// //
// //     stage('Build') {
// //       steps {
// //         script {
// //           sh 'docker build -t mecat/countriesiq-image .'
// //         }
// //       }
// //     }
// //
// //      stage('Run Tests') {
// //             steps {
// //               sh 'npm install' // Install project dependencies (if not already installed)
// //               sh 'npm test' // Run tests
// //             }
// //           }
// //
// //     stage('Create Container') {
// //       steps {
// //          echo 'Creating container...'
// //     	    script {
// //     	        sh 'docker run --name countriesiq-container -p 8081:80 -d mecat/countriesiq-image'
// //         }
// //             }
// //                 }
// //
// //     }}
//
