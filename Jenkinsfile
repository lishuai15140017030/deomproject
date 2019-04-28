#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }

    stage('run') {
        sh "yarn install"
    }
    
    stage('run') {
        sh "yarn run serve"
    }
}
