'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
const ngStorage = (() => 'ngStorage')(require('ngstorage'));
const ngMessages = (() => 'ngMessages')(require('angular-messages'));

/** 
 * Styles
 */
import maincss from '../css/style.css';

/**
 * Controllers
 */

/**
 * Directives
 */

/**
 * Services
 */

/**  
 * Routes 
 */

import routes from './config';

angular.module('showApp', [
    uirouter,
    ngAnimate,
    ngStorage,
    ngMessages
])
    // .controller('MainCtrl', MainCtrl)
    // .factory('AuthService', AuthService)
    // .directive('fileModel', fileModel)
    .config(routes);