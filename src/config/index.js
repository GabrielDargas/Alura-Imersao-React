const URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://veniflix.herokuapp.com'; 

export default{
    URL,
}