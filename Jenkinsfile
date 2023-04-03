// pipeline {
//   agent any
//
//   stages {
//         stage('Clone repository') {
//             steps {
//                 echo "Cloning the repository..."
//                 checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
//                 //git branch: 'main', url: 'https://github.com/chineduanunobi/WebServer2.git'
//             }
//         }
//   	stage('Build Docker Image') {
//   	    steps {
//   	        script {
//   	            sh 'docker build -t mecat/countriesiq .'
//   	        }
//   	    }
// 		}
// 	stage('Create Container') {
//             steps {
//                 echo 'Creating container...'
//                 sh 'docker run -d -p 8081:80 --name countriesiq-image mecat/countriesiq'
//             }
//         }
//   }
// }
pipeline {
    agent any
    stages {
    stage('Clone repository') {
      steps {
          echo "Cloning the repository..."
          checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
                    //git branch: 'main', url: 'https://github.com/chineduanunobi/WebServer2.git'
          }
      }
    stage('Build') {
      steps {
        script {
          sh 'docker build -t mecat/countriesiq-image .'
        }
      }
    }
    stage('Create Container') {
      steps {
         echo 'Creating container...'
    	    script {
    	        sh 'docker run --name countriesiq-container -p 8081:80 -d mecat/countriesiq-image'
                // sh 'docker run -d -p 8081:80 --name server_web1 mecat/server_web'
        }
            }
                }
//     stage('Test') {
//       steps {
//         script {
//           docker.image("mecat/countriesiq-image:latest").inside {
//             sh "npm test"
//           }
//         }
//       }}
    }}
