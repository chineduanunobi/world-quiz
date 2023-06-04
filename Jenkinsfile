pipeline {
    agent {
        label 'ciq-reactapp' // This is my slave node machine I want to run this pipeline on my slave agent
    }

    stages {
        stage('Cloning deployments') {
            steps {
              echo 'Cloning && pulling....'
              checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
            }
        }

        stage('Build') {
            steps {
                script {
                  sh 'docker build --no-cache . -t react-image:v.${BUILD_NUMBER}'
                }
            }
        }
        stage('Publish') {
            steps {
                echo 'Publishing....'
                script {
                    sh "docker tag react-image:v.${BUILD_NUMBER} react-image:v.${BUILD_NUMBER}"
                    sh "docker push react-image:v.${BUILD_NUMBER}"
                }
            }
        }
        stage('Deployment') {
            steps {
               echo 'Deploying....'
               script {
                    sh 'kubectl delete -f country-iq-deployment.yaml'
                    sh 'kubectl delete -f country-iq-service.yaml'
                    sh 'kubectl apply -f country-iq-deployment.yaml'
                    sh 'kubectl apply -f country-iq-service.yaml'
               }
            }
        }
    }
    post {
        always {
            echo 'Portal image is deployed in to Kubernetes '
        }
        success {
            echo 'Successfully!'
        }
        failure {
            echo 'Failed!'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}


// pipeline {
//     agent any
//
//     stages {
//     stage('Clone repository') {
//       steps {
//           echo "Cloning the repository..."
//           checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
//           }
//       }
//
//     stage('Build') {
//       steps {
//         script {
//           sh 'docker build -t mecat/countriesiq-image .'
//         }
//       }
//     }
//
//      stage('Run Tests') {
//             steps {
//               sh 'npm install' // Install project dependencies (if not already installed)
//               sh 'npm test' // Run tests
//             }
//           }
//
//     stage('Create Container') {
//       steps {
//          echo 'Creating container...'
//     	    script {
//     	        sh 'docker run --name countriesiq-container -p 8081:80 -d mecat/countriesiq-image'
//         }
//             }
//                 }
//
//     }}

