pipeline {
    agent { docker { image 'node:11.2' } }
    stages {
        stage('build') {
            steps {
                sh 'npm start'
            }
        }
    }
}