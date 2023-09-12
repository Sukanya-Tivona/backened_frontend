pipeline {
    agent any
    stages {
        stage('Buildbackend') {
            steps {
                sh "docker pull snapa1816/backendimage"
                sh "docker network create --driver bridge my-net126"
                sh "docker run -d --network my-net126 -p 7000:7000  snapa1816/backendimage"
                sh "docker ps"
                //sh "docker stop backendsep78"
                //sh "docker stop "
            }
        }
    
   
        stage('Buildfrontend') {
            steps {
                sh "docker pull snapa1816/frontendimage"
                //sh "docker network create --bridge bridge my-net126"
                sh "docker run -d --network my-net126 -p 3000:3000  snapa1816/frontendimage"
                sh "docker ps"
                //sh "docker stop backendsep78"
                //sh "docker stop "
            }
        }
    }
}
