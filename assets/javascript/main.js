        
        
        
        //** phase 1 - PetFinder API:"http://api.petfinder.com/pet" and Using GET-Ajax 
        
        // young API Key - PetFinder
        // e1f0be0034d8cc774bc8b9da4206ab27
        // API Secret
        // 6b039100bb70ef9174e7233692373ca0
         
       
        $(document).ready(function () {
            var zipcode = "";
            var url = ("http://api.petfinder.com/pet.getRandom?key=e1f0be0034d8cc774bc8b9da4206ab27&location=" + zipcode + "&output=full&format=json");
          
            // $( "sumit" ).click(function( event ) {
            //     console.log("clicked");
            //     $("#zipcode").push(zipcode);
            // }
           

                //'http://api.petfinder.com/pet.getRandom?key=e1f0be0034d8cc774bc8b9da4206ab27&location=75035&output=full&format=json';


            $.ajax({
                type: "GET",
                data: {},
                url: url + "&callback=?",
                dataType: "json",
                success: function (data) {
                    // stores result
                    //var result = "";

                    var petfinder = data.petfinder;
                    var infoHTML = "<ul>";

                    infoHTML += "<li>";
                    infoHTML += "<strong>ZipCode</strong><br>";
                    //add photo to ZipCode
                    infoHTML += petfinder.pet.contact.zip["$t"];
                    console.log(infoHTML);

                    infoHTML += "<li>";
                    infoHTML += "<strong>ShelterID</strong><br>";
                    //add ShelterID to li
                    infoHTML += petfinder.pet.shelterId["$t"];

                    infoHTML += "<li>";
                    infoHTML += '<strong>pic</strong><br><img src="';
                    //add photo to li and ["2"] = X-large picture
                    infoHTML += petfinder.pet.media.photos.photo["2"].$t;
                    infoHTML += '"</li>';

                    infoHTML += "</ul>";
                    // return info HTML to #petfinderInfo ;
                    console.log(petfinder);
                    console.log(infoHTML);
                    $("#petfinderInfo").html(infoHTML);
                },

                // when API request returns with errors throw alerts  
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(request));
                }
            });
        });


                //Firebase connection 
                var config = {
                    //young API KEY
                  //apiKey: "AIzaSyC1yYMNVs-rkVP040Su6ZwFSDVCXLZwC5I",
                  apiKey: "AIzaSyC1yYMNVs-rkVP040Su6ZwFSDVCXLZwC5I",
                  authDomain: "firstproject-c32a7.firebaseapp.com",
                  databaseURL: "https://firstproject-c32a7.firebaseio.com",
                  projectId: "firstproject-c32a7",
                  storageBucket: "firstproject-c32a7.appspot.com",
                  messagingSenderId: "1089648735509"
                };
                firebase.initializeApp(config);
      
                var database = firebase.database();
                console.log(database);
      