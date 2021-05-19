var bodyParser = require('body-parser');
var fs = require("fs");
const fetch = require('node-fetch');
const request = require('request');

// Arquivo que controla as rotas, e os dados que vão para as rotas

module.exports = function(app){

    app.get('/', function(req, res, next){
     
      const url = "http://localhost:1337/Articles";
      
      request.get(url, (error, response, body) => {
        let json = JSON.parse(body); // guarda o conteudo de artigos na variavel
        console.log(json);

        const url = "http://localhost:1337/Featured";
      
        request.get(url, (error, response, body) => {
          let featured = JSON.parse(body);
          
        
        
        const url = "http://localhost:1337/Content"; // os mais novos
      
        request.get(url, (error, response, body) => {
          let content = JSON.parse(body);
            
        const url = "http://localhost:1337/Projetos";
      
        request.get(url, (error, response, body) => {
            let projetos = JSON.parse(body);

            const url = "http://localhost:1337/Projetos?sessao=colar";
      
            request.get(url, (error, response, body) => {
                let colar = JSON.parse(body);

                const url = "http://localhost:1337/Projetos?sessao=tornozeleira";
      
            request.get(url, (error, response, body) => {
                let tornozeleira = JSON.parse(body);
              
        
        
        res.render('index', {dict: json, featured: featured, content: content, projetos: projetos, colar: colar, tornozeleira: tornozeleira}); // renderização
          
     });
    });
    });
    });
   });
  });
  });



  app.get('/projetos', function(req, res, next){
   

      const url = "http://localhost:1337/Featured";
    
      request.get(url, (error, response, body) => {
        let featured = JSON.parse(body);
    
          
      const url = "http://localhost:1337/Projetos";
    
      request.get(url, (error, response, body) => {
          let projetos = JSON.parse(body);
            
      
      
      res.render('projetos', {featured: featured, projetos: projetos});
        
   });
  });
  });
    
      



   app.get('/blog-post&:slug', function(req, res, next){
      
   
     const url = "http://localhost:1337/Featured";

     slug = req.params.slug
   
     request.get(url, (error, response, body) => {
       let featured = JSON.parse(body);
   
         
     const url = "http://localhost:1337/Articles?" + slug;
   
     request.get(url, (error, response, body) => {
         let articles1 = JSON.parse(body);

      const url = "http://localhost:1337/Articles";
      request.get(url, (error, response, body) => {
         let json = JSON.parse(body);
         

      const url = "http://localhost:1337/Writers";

      request.get(url, (error, response, body) => {
          let writers = JSON.parse(body);
               
     
     console.log(req.params.slug)
     res.render('post', {featured: featured, articles: articles1, writers: writers, dict: json});
       
    
    });
   });
   });
  });
});



app.get('/blog', function(req, res, next){
   

  const url = "http://localhost:1337/Featured";

  request.get(url, (error, response, body) => {
    let featured = JSON.parse(body);

      
  const url = "http://localhost:1337/Articles";

  request.get(url, (error, response, body) => {
      let dict = JSON.parse(body);
        
  
  
  res.render('blog', {featured: featured, dict: dict});
    
});
});
});


  

}
