pipeline {
    agent any

    stages {
        stage('Git download') {
            steps {
                git branch: 'Cypress', url: 'https://github.com/Valiantsin2021/API_Cypress_DropBox_test.git'
            }
        }
        stage('Install') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'npm run test'
            }
        }
    }
}
