pipeline {
  environment {
      PROJECT_ID = 'watchful-goods-453607-a5'
      CLUSTER_NAME = 'test'
      LOCATION = 'europe-west1'
      CREDENTIALS_ID = 'My Fist Project'
      dockerimagename = 'amerab/portfolio'
  }
  tools {
  'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
}
  agent 
    kubernetes {
      
    }
  stages {
    stage('Checkout Source') {
      steps {
        git 'https://github.com/AmeraB84/Portefolio-React-Bootstrap.git'
      }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
    stage('Pushing Image') {
      environment {
          registryCredential = 'dockerhub-credentials'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('Deploy to GKE') {
        steps{
            step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: '/k8s/', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
        }
    }
  }
}
