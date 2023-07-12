pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                sh 'cd web'
                sh 'npm install'
                sh 'npm build' 
            }
        }         
    }
}