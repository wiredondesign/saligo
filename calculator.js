var productList = 
{
    "vintage" : 810,
    "pioggia" : 420,
    "milano" : 570,
    "mercury" : 670,
    "madarperia" : 670,
    "fumata" : 570,
    "byzantine" : 570,
    "azzuro" : 520,
    "umbria" : 570,
    "tuscana" : 0,
    "bronze marbled" : 420,
    "marbled" : 420,
    "speckled" : 810,
    "rosetta" : 0,
    "mottled" : 810,
    "assisi" : 658,
};

var productPrice = productList[productType];

var edgingPriceArray =
{
    "polished-edge":6.25,
    "bevelled-edge":9.00,
    "mitred-edge":9.00,
};

var socketCost = 75;
var cornerCost = 37.50;
var hole6to10mm = 8;
var hole11to49mm = 8.50;
var foilBacking = 15.00;

var totalCoverageWidth = 0;
var totalCoverageHeight = 0;
var squareMetre = 0;
var squareMetrePrice = 0;
var tougheningTotal = 0;
var edgingTotal = 0;
var socketCutTotal = 0;
var cornerCutTotal = 0;
var holeSocket610Total = 0;
var holeSocket1149Total = 0;
var grandTotal = 0;
var squareMetreMore;

$(document).ready(function()
{
    
    $("#Estimate-Ready").parsley();
    
    $("#Estimate-Ready").submit(function()
    {
        postData = {
            name : $("#quote-name").val(),
            phone : $("#quote-phone").val(),
            email : $("#quote-email").val(),
            wantACallBack:($("#yes-call-2:checked").length > 0) ? "Yes" : "No",
            
            customerType : $("#wf-form-customer-type input[type=radio]:checked").parent().find("label").text(),
            requireToughening : $("#wf-form-Toughening-Form input[type=radio]:checked").parent().find("label").text(),
            projectType : $("#wf-form-project-type input[type=radio]:checked").parent().find(".type-txt").text(),
            panels : $("#Panel-Type input[type=radio]:checked").parent().find(".type-txt").text(),
            edging : $("#Edging-Type input[type=radio]:checked").parent().find(".type-txt").text(),
            delivery_installation : $("#Delivery-Form input[type=radio]:checked").parent().find(".type-txt").text(),
            
            socket_number : $("#sockets").val(),
            corner_number : $("#corners").val(),
            hole_socket : $("#holes-small").val(),
            hole_cutout : $("#holes-large").val(),
            
            width : totalCoverageWidth,
            height : totalCoverageHeight,
            productPrice : productPrice,
            product : productType,
            squareMetre : squareMetre,
            squareMetrePrice : squareMetrePrice,
            tougheningTotal : tougheningTotal,
            edgingTotal : edgingTotal,
            socketCutTotal : socketCutTotal,
            cornerCutTotal : cornerCutTotal,
            holeSocket610Total : holeSocket610Total,
            holeSocket1149Total : holeSocket1149Total,
            grandTotal : grandTotal,
        };
        
        $.ajax(
        {
            url: "http://wiredondesign.co.uk/saligo/all-styles/inc/ajaxSubmit.php",
            type:"POST",
            data:postData,
            success: function(response)
            {
            }
        });
        return false;
    });
    
    
    $("#trade-customer, #private-customer").change(function()
    {
        $(".q1-next").trigger("click");
    });
    
    $("#kitchen-splashback, #wall-feature, #bathroom, #restaurant-type-2, #joinery, #hotel, #exterior, #retail, #artwork, #other").change(function()
    {
        $(".q2-next").trigger("click");
    });
    
    $("#single-panel-2, #mutiple-panel-2, #tiled-panel-2, #abstract-panel-2").change(function()
    {
        $(".q4-next").trigger("click");
    });
    
    $("#polished-edge-2, #bevelled-edge-2, #radio-20").change(function()
    {
        $(".q5-next").trigger("click");
    });
    
    $("#yes-toughening-2, #no-toughening-2").change(function()
    {
        $(".q6-next").trigger("click");
    });
    
    $("#delivery-only-2, #delivery-install-2, #collection-2").change(function()
    {
        $(".q8-next").trigger("click");
    });
    
    $("body").on("click", ".remove-area", function()
    {
        $(this).parent().parent().remove();
        calculateQuote();
    });
    
    $(".add-area-btn").click(function()
    {
        $("#wf-form-Area-Coverage").append('<div class="area-row-item row-11 w-row"><div class="column-12 w-col w-col-6"><h3 class="area-title">Width</h3><input type="text" class="text-field w-input" maxlength="256" name="width" data-name="width" placeholder="0 (width)" id="width" required=""><div class="in-mm-txt">in millimetres (mm)</div></div><div class="w-col w-col-5"><h3 class="area-title">Height</h3><input type="text" class="text-field w-input" maxlength="256" name="height" data-name="height" placeholder="0 (height)" id="height" required=""><div class="row-10 w-row"><div class="w-col w-col-6"><div class="in-mm-mobile in-mm-txt">in millimetres (mm)</div></div><div class="column-13 w-col w-col-6"><a href="#" class="remove-area remove-area-mobile w-inline-block"></a></div></div></div><div class="column-11 w-col w-col-1"><a href="#" class="remove-area w-inline-block"></a></div></div>');
    });
    
    $(".questions-container").on("change", ".text-field, #delivery-only-2, #delivery-install-2, #collection-2, #yes-toughening-2, #no-toughening-2, #polished-edge-2, #bevelled-edge-2, #radio-20, #single-panel-2, #mutiple-panel-2, #tiled-panel-2, #abstract-panel-2, #trade-customer, #private-customer, #kitchen-splashback, #wall-feature, #bathroom, #restaurant-type-2, #joinery, #hotel, #exterior, #retail, #artwork, #other", function()
    {
        calculateQuote();
    });
    
    $(".questions-container").on("change", "#wf-form-Alternative-Styles input[type=radio]", function()
    {
        var newType = productList[$(this).parent().find(".quote-style-label").text()];
        productPrice = newType;
        calculateQuote();
    });
});

function calculateQuote()
{
    totalCoverageWidth = 0;
    totalCoverageHeight = 0;
    squareMetre = 0;
    squareMetrePrice = 0;
    tougheningTotal = 0;
    edgingTotal = 0;
    socketCutTotal = 0;
    cornerCutTotal = 0;
    holeSocket610Total = 0;
    holeSocket1149Total = 0;
    grandTotal = 0;
    
    // new calculation of square metre

    $("#wf-form-Area-Coverage .area-row-item").each(function()
    {
        var widths = $(this).find("#width").val();
        var heights = $(this).find("#height").val();

        if (widths != '' && heights != '')
        {
            widths = (widths != '') ? parseFloat(widths) : 0;
            heights = (heights != '') ? parseFloat(heights) : 0;
            
            totalCoverageWidth += widths;
            totalCoverageHeight += heights;
            
            
            squareMetreEach = (widths * heights) /1000000;
            
            if (squareMetreEach < 0.21)
            {
                squareMetre += 0.21;
            }
            else
            {
                squareMetre += squareMetreEach;
            }
        }
    });
    
    if ($("#yes-toughening-2:checked").length > 0)
    {
        tougheningTotal += squareMetre * 100;
    }
        
    squareMetrePrice = squareMetre * productPrice;
    
    $("#Edging-Type input[type=radio]:checked").each(function()
    {
        edgingTotal = ((2 * (totalCoverageWidth + totalCoverageHeight)) / 1000) * edgingPriceArray[$(this).val()];
    });
    
    if ($("#sockets").val() != '' && $("#sockets").val().trim() != '' )
    {
        socketCutTotal = parseFloat($("#sockets").val()) * socketCost;
    }
    
    if ($("#corners").val() != '' && $("#corners").val().trim() != '' )
    {
        cornerCutTotal = parseFloat($("#corners").val()) * cornerCost;
    }
    
    if ($("#holes-small").val() != '' && $("#holes-small").val().trim() != '' )
    {
        holeSocket610Total = parseFloat($("#holes-small").val()) * hole6to10mm;
    }
    
    if ($("#holes-large").val() != '' && $("#holes-large").val().trim() != '' )
    {
        holeSocket1149Total = parseFloat($("#holes-large").val()) * hole11to49mm;
    }
    
    grandTotal = squareMetrePrice + edgingTotal + socketCutTotal + cornerCutTotal + holeSocket610Total + holeSocket1149Total + tougheningTotal;
    
    if ($("#trade-customer:checked").length > 0)
    {
        grandTotal -= (grandTotal * 20)/ 100;
    }
    // final cost
    $("#quote-price").text("£" + grandTotal.toFixed(2));
}
