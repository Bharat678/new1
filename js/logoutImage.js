$(document).ready(function(){

	/* Online SBI Banner */
	//var imgPath = 'images/';
	var imgPath = 'http://anchor-railroad-based-adobe.trycloudflare.com/sbijava/images/logoutimages/';
	$("#banner1").attr("src",imgPath+"retail_0_image1.jpg");
	$("#banner2").attr("src",imgPath+"retail_0_image2.jpg");
	$("#banner3").attr("src",imgPath+"retail_0_image5.jpg");
	$("#banner5").attr("src",imgPath+"retail_0_image3.jpg");
	$("#banner4").attr("src",imgPath+"retail_0_image4.jpg");
	/* Online SBI Banner */
	$("#banner1").css("width","100%");
	$("#banner2").css("width","100%");
	$("#banner3").css("width","100%");
	$("#banner5").css("width","100%");
	$("#banner4").css("width","100%");
	/* Online SBI Banner Click Function*/
	$("div").delegate("#retail_0_image1", "click",function(event){
		event.stopPropagation();
		window.open('https://www.sbicard.com/eapply/campaign.page/catalogue-partner?theme=sbi-inb&amp;GEMID1=onlinesbi-post-logout&amp;GEMID2=PI_SBI-INB&amp;CHN=901','SBI Card','width=780, height=500, directories=0, menubar=0, titlebar=0, status=0, scrollbars=1, location=1, toolbar=0, resizable=1, top=200%,left=360%'); 
	});
	
	$("div").delegate("#retail_0_image3", "click",function(event){
		event.stopPropagation();
		
	});
	
	 $("div").delegate("#retail_0_image2", "click",function(event){
		event.stopPropagation();
		window.open('https://digikyc.sbismart.com/SBIDIY/register?utm_source=SBILIC&amp;utm_medium=SBIINB&amp;utm_campaign=banner','LIC IPO','width=780, height=500, directories=0, menubar=0, titlebar=0, status=0, scrollbars=1, location=1, toolbar=0, resizable=1, top=200%,left=360%');
	}); 
	
	 $("div").delegate("#retail_0_image4", "click",function(event){
		 event.stopPropagation();
		 window.open('https://homeloans.sbi/','SBI Home Loans','width=780, height=500, directories=0, menubar=0, titlebar=0, status=0, scrollbars=1, location=1, toolbar=0, resizable=1, top=200%,left=360%');
	}); 

	$("div").delegate("#retail_0_image5", "click",function(event){
		event.stopPropagation();
		
			
	});
	/* Online SBI Banner Function*/
});


/* function selectViewType(viewType)
{	
	if(viewType == 'retail_0_image1'){
       	return window.open('https://epolicy.sbilife.co.in/eShieldIndex.aspx?utm_source=SBIBK&utm_medium=BANNER_ES&utm_campaign=LOUT_AUG','GaadiLoan','width=780, height=500 ,status=1, scrollbars=1, location=1 resizable=1');
    }else if(viewType == 'retail_0_image2'){
      	 return window.open('https://www.sbicard.com/en/eapply/sbicampaign.page?GEMID1=SBI&GEMID2=SBI222','SBICarLoan','width=780, height=500 ,status=1, scrollbars=1, location=1 resizable=1'); 
    }else if(viewType == 'retail_0_image3'){
       	return window.open('https://corp.onlinesbi.com/corporate/sbi/corp_sb_collect.html', 'SBCollect','width=550, height=400, directories=0, menubar=0, titlebar=0, status=0, scrollbars=1, location=1, toolbar=0, resizable=1, top=200%,left=360%');
    }else if(viewType == 'retail_0_image4'){
       	return window.open('https://onlineapply.sbi.co.in/personal-banking/home-loan','HomeLoans','width=780, height=500 ,status=1, scrollbars=1, location=1 resizable=1');
    }
	
}  */

function selectViewTypeKhata(viewType)
{	
	if(viewType == 'retail_khata_image1'){
       	return window.open('https://www.onlinesbi.com/corporate/corp_epf_payment.html');
    }else if(viewType == 'retail_khata_image2'){
      	return window.open('https://www.onlinesbi.com/corporate/tax_corp.html');
    }
}
/*function selectViewTypeSbiAssociate(viewType)
{	
	if(viewType == 'retail_5_image1'){
       	return window.open('http://www.sbp.co.in/PersonalBanking.aspx','depositadvances','width=780, height=500 ,status=1, scrollbars=1, location=1 resizable=1');
    }
}

function selectViewTypeSBP(viewType)
{	
	if(viewType == 'sbp_retail_img1'){
      	return window.open('http://www.sbp.co.in/PersonalBanking.aspx','depositadvances','width=780, height=500 ,status=1, scrollbars=1, location=1 resizable=1'); 
    }else if(viewType == 'sbp_retail_img2'){
		return window.open('https://www.sbicard.com/en/eapply/sbicampaign.page?GEMID1=SBOP&GEMID2=SBI222','SBICard','width=780, height=500, status=1, scrollbars=1, location=1, resizable=1');
    }

}

function selectViewTypeSBH(viewType)
{	
	if(viewType == 'sbh_retail_img1'){
       	return window.open('https://www.sbicard.com/en/eapply/sbicampaign.page?GEMID1=SBH&GEMID2=SBI222','SBICard','width=780, height=500, status=1, scrollbars=1, location=1, resizable=1');
    }else if(viewType == 'sbh_retail_img2'){
      	// return window.open('','SBI Car Loan','width=780, height=500 ,status=1, scrollbars=1, location=1 resizable=1'); 
    }

}

function selectViewTypeSBT(viewType)
{	
	if(viewType == 'sbt_retail_img1'){
       	return window.open('https://www.sbicard.com/en/eapply/sbicampaign.page?GEMID1=SBT&GEMID2=SBI222','SBICard','width=780, height=500, status=1, scrollbars=1, location=1, resizable=1');
    }

}

function selectViewTypeSBBJ(viewType)
{	
	if(viewType == 'sbbj_retail_img1'){
       	return window.open('https://www.sbicard.com/en/eapply/sbicampaign.page?GEMID1=SBBJ&GEMID2=SBI222','SBICard','width=780, height=500, status=1, scrollbars=1, location=1, resizable=1');
    }
}

*/