/*
-   Website 19 "space"
-   Developed | Desgined by Mayank & Vinay
-   JavaScript : ./src/js/space.js
*/

try
{
    $(document).ready(function () {

        /* 
            https://isro.vercel.app/

            https://isro.vercel.app/api/spacecrafts
            https://isro.vercel.app/api/customer_satellites
            https://isro.vercel.app/api/centres
            */
        $.get("../../public/api/space_mission_data.json", function (response) {

            if (response.status)
            {
                let return_data = response.data.customer_satellites

                let centers_data = response.data.centers

                let spacecrafts_data = response.data.spacecrafts
                // console.log(response.data.spacecrafts)
                // console.log(centers_data)

                $.each(spacecrafts_data, function(i) {

                    $("#space_crafts").append(`
                        <div class="btn btn-outline-dark btn-sm d-inline-block m-1">
                            <span class=""> ${spacecrafts_data[i].name} </span>
                            <span class="badge rounded-pill border"> ${spacecrafts_data[i].id} </span>
                        </div>
                    `)
                })

                $("#space_centers").append(`
                    <div class="row h6">
                        <div class="col-1"> id </div>
                        <div class="col"> name </div>    
                        <div class="col-2"> place </div>    
                        <div class="col-2"> state </div>    
                    </div>
                `)

                $.each(centers_data, function(i) {

                    $("#space_centers").append(`
                        <div class="row">
                            <div class="col-1 py-1"> ${centers_data[i].id} </div>
                            <div class="col py-1"> ${centers_data[i].name} </div>    
                            <div class="col-2 py-1"> ${centers_data[i].Place} </div>    
                            <div class="col-2 py-1"> ${centers_data[i].State} </div>    
                        </div>
                    `)
                })

                $("#space_centers .row:nth-child(2n)").css({
                    "background":"var(--bs-light)",
                })

                $("#data_table").append(`
                    <div class="row h6">
                        <div class="col"> id </div>
                        <div class="col"> country </div>    
                        <div class="col"> lauch_date </div>    
                        <div class="col"> mass </div>    
                        <div class="col"> launcher </div>    
                    </div>
                `)

                $.each(return_data, function(i) {

                    $("#data_table").append(`
                        <div class="row border">
                            <div class="col"> ${return_data[i].id} </div>
                            <div class="col"> ${return_data[i].country} </div>    
                            <div class="col"> ${return_data[i].launch_date} </div>    
                            <div class="col"> ${return_data[i].mass} </div>    
                            <div class="col"> ${return_data[i].launcher} </div>    
                        </div>
                    `)
                })
            }
        })

        /* on key press search field value search in space center */

        $(document).on("keyup", "#search_field", function () {

            let search_value = $(this).val().toLowerCase()

            $("#space_centers .row").each(function () {
                
                ($(this).text().toLowerCase().includes(search_value))? $(this).fadeIn() : $(this).fadeOut();
            })
        })
    })
}
catch(error)
{
    console.error(error)
}
// the end