/*
##################################################################################################################################
###### Project   : wp image slideshow  																						######
###### File Name : setting.js                   																			######
###### Purpose   : This javascript is to authenticate the form.  															######
###### Created   : 08-05-2011                  																				######
###### Modified  : 08-05-2011                  																				######
###### Author    : Gopi.R (http://www.gopiplus.com/work/)                        											######
###### Link      : http://www.gopiplus.com/work/2011/05/06/wordpress-plugin-wp-image-slideshow/      						######
##################################################################################################################################
*/


function Ihrss_submit()
{
	if(document.Ihrss_form.Ihrss_path.value=="")
	{
		alert("Please enter the image path.")
		document.Ihrss_form.Ihrss_path.focus();
		return false;
	}
	else if(document.Ihrss_form.Ihrss_link.value=="")
	{
		alert("Please enter the target link.")
		document.Ihrss_form.Ihrss_link.focus();
		return false;
	}
	else if(document.Ihrss_form.Ihrss_target.value=="")
	{
		alert("Please enter the target status.")
		document.Ihrss_form.Ihrss_target.focus();
		return false;
	}
	else if(document.Ihrss_form.Ihrss_title.value=="")
	{
		alert("Please enter the image alt text.")
		document.Ihrss_form.Ihrss_title.focus();
		return false;
	}
	else if(document.Ihrss_form.Ihrss_type.value=="")
	{
		alert("Please enter the gallery type.")
		document.Ihrss_form.Ihrss_type.focus();
		return false;
	}
	else if(document.Ihrss_form.Ihrss_status.value=="")
	{
		alert("Please select the display status.")
		document.Ihrss_form.Ihrss_status.focus();
		return false;
	}
	else if(document.Ihrss_form.Ihrss_order.value=="")
	{
		alert("Please enter the display order, only number.")
		document.Ihrss_form.Ihrss_order.focus();
		return false;
	}
	else if(isNaN(document.Ihrss_form.Ihrss_order.value))
	{
		alert("Please enter the display order, only number.")
		document.Ihrss_form.Ihrss_order.focus();
		return false;
	}
}

function Ihrss_delete(id)
{
	if(confirm("Do you want to delete this record?"))
	{
		document.frm_Ihrss_display.action="options-general.php?page=image-horizontal-reel-scroll-slideshow/image-management.php&AC=DEL&DID="+id;
		document.frm_Ihrss_display.submit();
	}
}	

function Ihrss_redirect()
{
	window.location = "options-general.php?page=image-horizontal-reel-scroll-slideshow/image-management.php";
}
