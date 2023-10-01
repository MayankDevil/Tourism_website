/*
-   Website 19 "Tourism"
-   Developed | Desgined by Mayank & Vinay
-   JavaScript : ./js/script.js
*/
try
{
    let gallery = document.querySelectorAll(" #gallery > .container > .row ")[0]

    /*
        [ gallery title ]------------------------------------------------------------------------
    */
    gallery.innerHTML = (`
        <div class="col-lg-4 col-md-6 col-12 p-3 bg-success p-5 text-white rounded shadow" id="gl_title">
                                
            <div class="h2"> This is your best movement in future life with enjoiness and happiness. </div>

        </div>
    `)

    /*
        -----------------------------------------------------------------------------------------
        | galleryFrame function | layout of gallery frame set by take argument of element
        -----------------------------------------------------------------------------------------
    */ 

    function galleryFrame(element)
    {
        return (`
            <!-- ${element} -->
            <div class="col-lg-4 col-md-6 col-12 p-3 position-relative outerBox">
                <div class="position-absolute bg-white w-100 h-100 innerBox">

                    <div class="h3 p-3"> ${element.name} </div>

                    <div class="p-3 mx-3"> ${element.about} </div>

                </div>
                <img src="${element.pic}" alt="" class="w-100 h-100 rounded shadow">
            </div>
        `)
    }

    /*
        -----------------------------------------------------------------------------------------
        [ tourismData ] array of object connected with foreach loop
        -----------------------------------------------------------------------------------------
    */ 

    tourismData = [
        {
            name : "River Booting",
            about : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deserunt assumenda, officiis fugit voluptatem illum.",
            pic : "data/n2.jpg"
        },
        {
            name : "Mount Climbing",
            about : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deserunt assumenda, officiis fugit voluptatem illum.",
            pic : "data/n3.jpg"
        },
        {
            name : "Forest Camping",
            about : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deserunt assumenda, officiis fugit voluptatem illum.",
            pic : "data/n4.jpg"
        },
        {
            name : "Shnow Skiing",
            about : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deserunt assumenda, officiis fugit voluptatem illum.",
            pic : "data/n5.jpg"
        },
        {
            name : "Sea Diving",
            about : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deserunt assumenda, officiis fugit voluptatem illum.",
            pic : "data/n1.jpg"
        }
    ].forEach(element => {

        gallery.insertAdjacentHTML("beforeend",galleryFrame(element))

    })
}
catch(error)
{
    alert(console.error(error));
}
// the end
