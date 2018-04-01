
var _data;
function load()
{
   loadJSON(_api, function(response)
   {
        //alert(response);
         _data = JSON.parse(response); //eval('(' +response+')')
        
     


          });

}
load();
