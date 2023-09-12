pipeline {
    agent any
    
    stages {
        stage('Checkout') 
        {
        steps {
            git branch: 'main', credentialsId: 'My_Github_Tivona_login', url: 'https://github.com/Sukanya-Tivona/backened_frontend.git'

              }
        }
        stage('building backend image')
        {
        steps {
        dir('src/server'){
				script {
                        // Install Node.js dependencies and build your backend
                        sh 'docker build -t backendimage17 .'
                        sh 'docker images'
                                        }
	                }
              }
        }
        stage('building the frontend image')
        {
        steps{
        dir('src/client'){
				script {
                        // Install Node.js dependencies and build your backend
                        sh 'docker build -t frontendimage17 .'
                        sh 'docker images'
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
	 
