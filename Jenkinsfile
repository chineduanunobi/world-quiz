pipeline {
    agent any

    stages {
    stage('Clone repository') {
      steps {
          echo "Cloning the repository..."
          checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-github', url: 'https://github.com/chineduanunobi/world-quiz.git']])
          }
      }

    stage('Build') {
      steps {
        script {
          sh 'docker build -t mecat/countriesiq-image .'
        }
      }
    }

     stage('Run Tests') {
            steps {
              sh 'npm install' // Install project dependencies (if not already installed)
              sh 'npm test' // Run tests
            }
          }

    stage('Create Container') {
      steps {
         echo 'Creating container...'
    	    script {
    	        sh 'docker run --name countriesiq-container -p 8081:80 -d mecat/countriesiq-image'
        }
            }
                }

    }}
