pipeline {
    agent any

    stages {
        stage('Functional test') {
            steps {
                echo "Testing build ${env.BUILD_ID}"
                bat 'npm run cy:run'
            }
        }
    }
}