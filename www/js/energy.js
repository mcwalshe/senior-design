        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            document.getElementById("submit").addEventListener("click", function() {
                document.getElementById("submit").style.display = "visible";
                // var dayOfUse = document.forms['getDay']['day'].value;

                // //var phpRef = getFilePHP(dayOfUse);
                // //FIXME: parse phpref
                // //now put into string variable to append to html file
                // time = "04/12/2017"
                // usage= "50" 
                // var tableVar = "<table><tr><td>Time</td><td>Usage</td></tr>";
                // //for (var i = 0; i < file.length(); i++) {
                //     time = 0;
                //     usage = 0;
                //     tableVar += "<tr><td>" + time + "</td><td>"+ usage + "W</td></tr>";
                
                // //}
                // tableVar += "</table>";
                // document.getElementById("table").innerHTML = tableVar;
            });
        }
            