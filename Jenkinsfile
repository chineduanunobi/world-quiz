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
          docker.build("countiresiq-image:latest", "-f Dockerfile .")
        }
      }
    }
    stage('Test') {
      steps {
        script {
          docker.image("countriesiq-image:latest").inside {
            sh "npm test"
          }
        }
      }
    }

  }
}