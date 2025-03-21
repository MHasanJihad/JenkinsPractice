pipeline {
    agent any

    environment {
        NODE_VERSION = '14'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://your-gitlab-or-github-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'yarn install'
                }
            }
        }

        stage('Run TestCafe Tests') {
            steps {
                script {
                    sh 'npx testcafe chrome tests/sampleTest.js --reporter allure'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    sh 'allure generate allure-results --clean -o allure-report'
                }
            }
        }

        stage('Archive Allure Report') {
            steps {
                archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
}