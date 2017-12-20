var isMobile = {
    Android: function() {
	return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
	return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
	return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
	return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
	return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var typeStyle = getParameterByName("t");

if(typeStyle != '')
{
	clickOnImage(typeStyle);
}

function clickOnImage(typeStyle)
{
setTimeout(function()
{
	$(".original-v-colour").find("img[data-ix='"+ typeStyle +"']").trigger("touchstart");
	$(".original-v-colour").find("img[data-ix='"+ typeStyle +"']").trigger("click");
},1000);
}

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
    "tuscana" : 570,
    "bronze marbled" : 420,
    "marbled" : 420,
    "speckled" : 810,
    "rosetta" : 570,
    "mottled" : 810,
    "assisi" : 658,
};

if (typeof productType == "undefined")
{
	productType = getParameterByName("t");
}

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
var form1;
var onlyAdminMail = 0;
var regex=/^[0-9]+$/;

$(document).ready(function()
{
    $(".remove-area").hide();
    form1 = $("#Estimate-Ready").parsley();
    
	
	/*$('#wf-form-Area-Coverage, #Glass-Processing-Form').on('keydown', 'input', function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||(/65|67|86|88/.test(e.keyCode)&&(e.ctrlKey===true||e.metaKey===true))&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});*/
	
	
	$("a[data-ix='question-1']").click(function()
	{
		setTimeout(function()
		{
			if($("#wf-form-customer-type input[type=radio]:checked").length == 0)
			{
				$("a[data-ix='q2-prev']").trigger("touchstart");
				$("a[data-ix='q2-prev']").trigger("click");
				alert("Please select customer type.");
			}
			scrollTp();
		},100);
	});
	
	$("a[data-ix='q2-next']").click(function()
	{
		setTimeout(function()
		{
			if($("#wf-form-project-type input[type=radio]:checked").length == 0)
			{
				$("a[data-ix='q3-prev']").trigger("touchstart");
				$("a[data-ix='q3-prev']").trigger("click");
				alert("Please select project type.");
			}
			scrollTp();
		},100);
	});
	
	$("a[data-ix='q3-next']").click(function()
	{
		setTimeout(function()
		{
			var blank = false;
			var numberOnly = true;
			
			$('#wf-form-Area-Coverage input').each(function()
			{
				if($(this).css("display")=='block' && $(this).parent().css("display")=='block' && $(this).val()=='')
				{
					blank = true;
				}
				if(!regex.test($(this).val()))
				{
					numberOnly = false;
				}
			});
			
			if(blank)
			{
				$("a[data-ix='q4-prev']").trigger("touchstart");
				$("a[data-ix='q4-prev']").trigger("click");
				alert("Please fill in all the fields or delete an area by pressing the red button.");
			}
			
			if(numberOnly)
			{
				$("a[data-ix='q4-prev']").trigger("touchstart");
				$("a[data-ix='q4-prev']").trigger("click");
				alert("The area coverage input must be only numbers");
			}
			
			
			
			scrollTp();
		},100);
	});
	
	$("a[data-ix='q4-next']").click(function()
	{
		$("#no-toughening-2").prop("checked", true);
		setTimeout(function()
		{
			if($("#Panel-Type input[type=radio]:checked").length == 0)
			{
				$("a[data-ix='q5-prev']").trigger("touchstart");
				$("a[data-ix='q5-prev']").trigger("click");
				alert("Please select panel type.");
			}
			scrollTp();
		},100);
	});
	
	$(".q5-next").click(function()
	{
		//$("#no-toughening-2").prop("checked", true);
		setTimeout(function()
		{
			if(productType != "vintage" && productType != "mottled" && productType != "speckled" && productType != "mercury")
			{
				$(".q6-next").trigger("touchstart");
				$(".q6-next").trigger("click");
				//alert("Please select glass toughening.");
			}
			scrollTp();
		},100);
	});
	
	$(".q7-prev").click(function()
	{
		setTimeout(function()
		{
			if(productType != "vintage" && productType != "mottled" && productType != "speckled" && productType != "mercury")
			{
				$(".q6-prev").trigger("touchstart");
				$(".q6-prev").trigger("click");
				//alert("Please select glass toughening.");
			}
			scrollTp();
		},100);
	});
	
	
	
	$("a[data-ix='q6-next']").click(function()
	{
		setTimeout(function()
		{
			if($("#wf-form-Toughening-Form input[type=radio]:checked").length == 0)
			{
				$("a[data-ix='q7-prev']").trigger("touchstart");
				$("a[data-ix='q7-prev']").trigger("click");
				alert("Please select glass toughening.");
			}
			scrollTp();
		},100);
	});
	
	$("a[data-ix='quote-ready-show']").click(function()
	{
		setTimeout(function()
		{
			if($("#Delivery-Form input[type=radio]:checked").length == 0)
			{
				$(".quote-ready").hide();
				$(".question-8").show();
			}
		},100);
	});
	
	$("#get-quote-estimate").click(function(e)
	{
		$("#Estimate-Ready").submit();
		if(!form1.isValid())
		{
			//show the form again
			setTimeout(function()
			{
				$(".quote-ready").show();
				$(".quote-cost").hide();
			},100);
		}
		else
		{
			setTimeout(function()
			{
				$(".quote-ready").hide();
				$(".quote-cost").show();
			},100);
		}
	});
	
    $("#Estimate-Ready").submit(function()
    {
		var productName = productType;
		if(getParameterByName("t") != undefined && productType != getParameterByName("t"))
		{
			var productName = productType + " (" + getParameterByName("t") + ")";
		}
		
        postData = {
			name : $("#quote-name").val(),
			phone : $("#quote-phone").val(),
			email : $("#quote-email").val(),
			postcode : $("#quote-postcode").val(),
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
			product : productName,
			squareMetre : squareMetre,
			squareMetrePrice : squareMetrePrice,
			tougheningTotal : tougheningTotal,
			edgingTotal : edgingTotal,
			socketCutTotal : socketCutTotal,
			cornerCutTotal : cornerCutTotal,
			holeSocket610Total : holeSocket610Total,
			holeSocket1149Total : holeSocket1149Total,
			grandTotal : grandTotal.toFixed(2),
			onlyAdminMail:onlyAdminMail
        };
        
        $.ajax(
        {
            url: "http://wiredondesign.co.uk/saligo/all-styles/inc/ajaxSubmit.php",
            type:"POST",
            data:postData,
            dataType:"jsonp",
			success: function(response)
            {
            }
        });
        return false;
    });
    
     
   $("#yes-call, #no-call").click(function ()
   {
	   $(this).parent().find("input[type=radio]").prop("checked", true);
		$("#yes-call-2").attr("disabled", true);
	    $("#no-call-2").attr("disabled", true);
		$("#call-back-area").hide();
		$(".contact-message").show();
		
		if($("#yes-call-2:checked").length)
		{
			$(".no-contact").hide();
		}
		else
		{
			$("#yes-contact").hide();
		}
    });
    
    $("#trade-customer, #private-customer").change(function()
    {
        $(".q1-next").trigger("touchstart");
	    $(".q1-next").trigger("click");
    });
    
    $("#kitchen-splashback, #wall-feature, #bathroom, #restaurant-type-2, #joinery, #hotel, #exterior, #retail, #artwork, #other").change(function()
    {
        $(".q2-next").trigger("touchstart");
        $(".q2-next").trigger("click");
    });
    
    $("#single-panel-2, #mutiple-panel-2, #tiled-panel-2, #abstract-panel-2").change(function()
    {
        $(".q4-next").trigger("touchstart");
        $(".q4-next").trigger("click");
    });
    
    $("#polished-edge-2, #bevelled-edge-2, #radio-20").change(function()
    {
        $(".q5-next").trigger("touchstart");
        $(".q5-next").trigger("click");
    });
    
    $("#yes-toughening-2, #no-toughening-2").change(function()
    {
        $(".q6-next").trigger("touchstart");
        $(".q6-next").trigger("click");
    });
    
    $("#delivery-only-2, #delivery-install-2, #collection-2").change(function()
    {
        $(".q8-next").trigger("touchstart");
        $(".q8-next").trigger("click");
    });
    
    $("body").on("click", ".remove-area", function()
    {
        $(this).parent().parent().remove();
        calculateQuote();
    });
    
    $("#add-another-area").click(function()
    {
	    if(isMobile.any()){
	    	alert("If you wish to add more areas, please view our website on a PC/Laptop.");
		    return false;
	    }
        $("#wf-form-Area-Coverage").append('<div class="area-row-item row-11 w-row"><div class="column-12 w-col w-col-6"><h3 class="area-title">Width</h3><input type="text" class="text-field w-input" maxlength="256" name="width" data-name="width" placeholder="0 (width)" id="width" required=""><div class="in-mm-txt">in millimetres (mm)</div></div><div class="w-col w-col-5"><h3 class="area-title">Height</h3><input type="text" class="text-field w-input" maxlength="256" name="height" data-name="height" placeholder="0 (height)" id="height" required=""><div class="row-10 w-row"><div class="w-col w-col-6"><div class="in-mm-mobile in-mm-txt">in millimetres (mm)</div></div><div class="column-13 w-col w-col-6"><a href="#" class="remove-area remove-area-mobile w-inline-block"></a></div></div></div><div class="column-11 w-col w-col-1"><a href="#" class="remove-area w-inline-block"></a></div></div>');
    });
    
    $(".questions-container").on("change", ".text-field, #delivery-only-2, #delivery-install-2, #collection-2, #yes-toughening-2, #no-toughening-2, #polished-edge-2, #bevelled-edge-2, #radio-20, #single-panel-2, #mutiple-panel-2, #tiled-panel-2, #abstract-panel-2, #trade-customer, #private-customer, #kitchen-splashback, #wall-feature, #bathroom, #restaurant-type-2, #joinery, #hotel, #exterior, #retail, #artwork, #other", function()
    {
        calculateQuote();
    });
    
    $(".questions-container").on("change", "#wf-form-Alternative-Styles .quote-style-option input[type=radio]", function()
    {
        var newType = productList[$(this).val()];
        productType = $(this).val();
		productPrice = newType;
        calculateQuote();
    });
		
	$("#end-quote-desktop").on("click", function()
	{
		if($("#yes-call-2:checked").length > 0)
		{
			onlyAdminMail = 1;
			$("#Estimate-Ready").submit();
			setTimeout(function()
			{
				window.location.reload();
			},1000);
		}
		else
		{
				window.location.reload();
		}
	});
	
	$(".end-quote-mobile").on("click", function()
	{
		if($("#yes-call-2:checked").length > 0)
		{
			onlyAdminMail = 1;
			$("#Estimate-Ready").submit();
			setTimeout(function()
			{
				history.go(-1);
			},1000);
		}
		else
		{
				history.go(-1);
		}
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
	
	console.log("Width: " + totalCoverageWidth);
	console.log("Height: " + totalCoverageHeight);
	console.log("Square Metre: " + squareMetre);
	console.log("SQ Price: " + squareMetrePrice);
	console.log("Toughening: " + tougheningTotal);
	console.log("Edging: " + edgingTotal);
	console.log("Socket Cut: " + socketCutTotal);
	console.log("Edging : " + edgingTotal);
	console.log("Corner Cut: " + cornerCutTotal);
	console.log("Hole 6-10: " +  holeSocket610Total);
	console.log("Hole 11-49: " + holeSocket1149Total);
	console.log("Grand total: " + grandTotal);	
	
    
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
	if(isNaN(grandTotal))
	{
		grandTotal = 0;
	}
    $("#quote-price").text("£" + grandTotal.toFixed(2));
}

function scrollTp()
{
	$("html, body").animate({ scrollTop: 0 }, "slow");
}
