/*
-   Website 19 "Tourism"
-   Developed | Desgined by Mayank & Vinay
-   JavaScript : ./js/script.js
*/

try
{
    $(document).ready(function () {

        let outputData = null

        let selected_value = 'India'

        /* load data function */

        function loadData(data, index)
        {
            let language_list = []

            let currencies = null

            for (const key in data[index].languages) {

                language_list.push(`${key} ${data[index].languages[key]}`)
            }

            for (const key in data[index].currencies) {

                currencies =  data[index].currencies[key]
            }

            $("#home").html('').append(`
                <div class='row'>
                    <div class='col-12 col-md-6'>

                        <div class='h1 my-3'> <img src='${data[index].flags.png}' class='image-fluid border flag_image' /> ${data[index].name.common} ( ${data[index].fifa} ) </div>
                        
                        <div class='lead text-muted my-3'> the official name is 
                            <span class='h6'> ${data[index].name.official} </span> 
                            that captial is <span class='h6'> ${data[index].capital} </span>.
                            the <span class='h6'> ${data[index].area} km<sup>2</sup> </span> 
                            ${(data[index].independent)?'independent':'not independent'} Nation 
                            that part of  <span class='h6'> ${data[index].continents.join(" | ")} </span>
                            continent at ${data[index].latlng[1]} longitude and ${data[index].latlng[0]} latitude
                        </div>

                        <div> Share border with  <span class='h6'>${data[index].borders.length}</span> countries <span class='h6'>${data[index].borders.join(" ")}</span> </div>

                        <div class'my-3'> currencies  is  <span class='h6'>${currencies.name}</span> <span class='text-light bg-danger px-2 '> ${currencies.symbol} </span> </div>
                        
                        <div class='my-3'> Number of Population <span class='h6'>${data[index].population}</span> </div>
                        

                        <div class='my-3'> <span class='h6'>${data[index].timezones.length}</span> Timezone ${data[index].timezones.join(" | ")} </div>
                        
                        <div class='my-3'> language : ${language_list.join(" | ")} </div>

                        <a href='${data[index].maps.openStreetMaps}' class='btn btn-dark btn-sm shadow my-3'> explore ${data[index].name.common} </a>

                    </div>

                    <div class='col-12 col-md-6 position-relative'>
                        <!-- <iframe src='${data[index].maps.googleMaps}' class='w-100 h-100'> ${data[index].maps.googleMaps} </iframe>-->
                        <img src='${data[index].flags.png}' class='w-100 h-100 p-1 position-absolute' id='side_image' />
                        <div class='position-absolute w-100 h-100 bg-fade bg-dark'>
                        
                        </div>
                    </div>
                </div>
            `)

            $(".flag_image").css({
                "padding":"1px",
                "height":"50px",
            })
        }

        /* fetch data function ajax call country data */

        function fetchData ()
        {
            $.ajax({
                url : '../../public/api/country_data.json',
                type : 'GET',
                beforeSend : () => {

                    $("#home").html(`<div class='display-1 text-center' id='loader'> data loading please wait ... </div>`)
                },
                success :  (data) => {

                    outputData = data
                    
                    $.each(data, function(i) {
    
                        $("#select_country").append(`<option value='${data[i].name.common}'> ${data[i].name.common} </option>`)
                    })
                    loadData(data, 85)
                },
                error : (error) => {
    
                    console.log(`\n ajax fetch error ${error}`)
                },
                complete : () => {
                    
                    $("#loader").fadeOut()
                }
            })
        }

        fetchData()     // fetch default


        /* get country index return index number of param country name by data */

        function getCountryIndex(name, data) 
        {
            for (let i = 0; i < data.length; i++)
                if (data[i].name.common === name)
                    return i
            return -1   
        }

        /* on select country load data */

        $(document).on("change", "#select_country", function () {

            selected_value = $(this).val()
            
            loadData(outputData, getCountryIndex(selected_value, outputData))
        })

        /* update time */

        setInterval(() => {
            
            $("#navbar-brand").html(Date().toLocaleString())
            
        }, 1000);
        
        

                
        /* jquery get tourism data */

        $.get("../../public/api/tourism_data.json", function (response) {

            $("#gallery > .container > .row").html(`
                <div class="col-lg-4 col-md-6 col-12 py-3" id="gl_title">
                    <div class="lead p-3 h-100 mx-auto bg-light rounded"> this website is create for learning purpose only. For practice Bootstrap and JQuery  or learn API (Application programming interface) </div>
                </div>
            `)
            
            if (response.status)
            {
                for (let i = 0; i < response.data.length; i++)
                {
                    $("#gallery > .container > .row").append(`
                        <div class="col-lg-4 col-md-6 col-12 p-3 position-relative outerBox">
                        <div class="position-absolute bg-white w-100 h-100 innerBox">
                        <div class="h3 p-3"> ${response.data[i].name} </div>
                        <div class="p-3 mx-3"> ${response.data[i].about} </div>
                        </div>
                        <img src="${response.data[i].pic}" alt="" class="w-100 h-100 rounded shadow" />
                        </div>
                    `)
                }
                console.log(response.message)
            }
        })
        $("#gallery > .container > .row").html(`<div class="alert alert-danger"> tourism data get error ... </div>`)
    })
}
catch(error)
{
    alert(console.error(error));
}
// the end