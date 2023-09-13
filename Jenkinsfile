pipeline {
environment {
    dockerbimagename = "backendimage17"
    dockerbImage = ""
    dockerfimagename = "frontendimage17"
    dockerfImage = ""
            }  
agent any

stages {
    stage('Checkout') 
    {
    steps {
        git branch: 'main', credentialsId: 'My_Github_Tivona_login', url: 'https://github.com/Sukanya-Tivona/backened_frontend.git'
          }
    }
   stage('Building the backend image') 
   {
    steps{
    dir('src/server'){
    script {
      dockerImage = docker.build dockerbimagename
           }
    }
    
    }
   }
    stage('building the frontend image')
    {
    steps{
    dir('src/client'){
    script {
      dockerImage = docker.build dockerfimagename
            }
                  }
    
         }
    }
    
    stage('Pushing Images to DockerHub') 
    {
        steps {
            withCredentials([usernamePassword(credentialsId: 'DOCKERHUB_CREDENTIALS', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                sh 'docker tag frontendimage17 snapa1816/ci_cd:frontendimage17'
                sh 'docker tag backendimage17 snapa1816/ci_cd:backendimage17'
                sh ' docker push snapa1816/ci_cd:backendimage17'
                sh ' docker push snapa1816/ci_cd:frontendimage17'
            }
        }
   
    }
 
    stage('pulling the backendimage and runing the container') 
    {
        steps {
            sh "docker pull snapa1816/ci_cd:backendimage17"
            sh "docker network create --driver bridge my-net126"
            sh "docker run -d --network my-net126 -p 7000:7000  snapa1816/ci_cd:backendimage17"
            sh "docker ps"
            //sh "docker stop backendsep78"
            //sh "docker stop "
        }
    }


    stage('pulling the frontendimage and runing the container') 
    {
        steps {
            sh "docker pull snapa1816/ci_cd:frontendimage17"
            //sh "docker network create --bridge bridge my-net126"
            sh "docker run -d --network my-net126 -p 3000:3000  snapa1816/ci_cd:frontendimage17"
            sh "docker ps"
            //sh "docker stop backendsep78"
            //sh "docker stop "
              }
    }
  
}

}
