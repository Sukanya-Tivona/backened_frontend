pipeline {
    agent any
    environment {
		
		PROJECT_ID = 'light-client-389123'
                CLUSTER_NAME = 'firstcluster'
                LOCATION = 'us-central1-b'
                CREDENTIALS_ID = 'gcp_gke_credentials'		
	}
    
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
			script 
			{
                        
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
			script 
		       {
                        
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
                    sh 'docker tag frontendimage17 snapa1816/ci_cd:f_1'
                    sh 'docker tag backendimage17 snapa1816/ci_cd:b_1'
                    sh 'docker push snapa1816/ci_cd:b_1'
                    sh 'docker push snapa1816/ci_cd:f_1'
                }
            }
       
        }
     
        stage('pulling the backendimage and runing the container') 
        {
            steps {
                sh "docker pull snapa1816/ci_cd:b_1"
                sh "docker network create --driver bridge my-net126"
                sh "docker run -d --network my-net126 -p 7000:7000  --name backendcon snapa1816/ci_cd:b_1"
                sh "docker ps"
               
            }
        }
    
   
        stage('pulling the frontendimage and runing the container') 
        {
            steps {
                sh "docker pull snapa1816/ci_cd:f_1"
                //sh "docker network create --bridge bridge my-net126"
                sh "docker run -d --network my-net126 -p 3000:3000  --name frontendcon snapa1816/ci_cd:f_1"
                sh "docker ps"
             
                  }
        }
        
         stage('Deploy to K8s') { 
                steps{
                   echo "Deployment started ..."
		  

		   
                   step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true]
                    kubectl apply -f backend_deployment.yaml
                    kubectl get pod
		   echo "Deployment Finished ..."
            }
	   }
        
    }
}
	 
