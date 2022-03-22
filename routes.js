const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

export const connection = mysql.createPool({
    host: '85.214.122.76',
    user: 'applogin',
    password: '2B@apC6CfUPM9i@T6p#pS6TBd!o25sV7ouEsM2B',
    database: 'Homesecurity'
});